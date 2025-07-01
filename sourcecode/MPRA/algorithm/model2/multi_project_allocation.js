const { topologicalSort, calculateCPM, checkHasAvailableSolution, getTimeForProject } = require("./helper");
const { splitKPIToEmployeesByKMeans, findBestMiniKPIOfTasks, reSplitKPIOfEmployees } = require('./k-mean.helper');
const { getLastKPIAndAvailableEmpsInTasks, scheduleTasksWithAssetAndEmpTasks, DLHS, harmonySearch_Base, reScheduleTasks } = require('./hs_helper');

function allocateResourcesForMultipleProjects(projects, allTasksInPast, allTasksOutOfProject, algorithmArgs, assetHasKPIWeight = 0) {
  const sortedProjects = sortProjectsByPriorityAndTime(projects);
  let globalResourceState = initializeGlobalResourceState(sortedProjects);
  const projectResults = {};
  
  for (const project of sortedProjects) {
    console.log(`Đang phân bổ nguồn lực cho dự án: ${project.projectKey}`);
    const updatedTasksOutOfProject = [...allTasksOutOfProject];
    
    for (const projId in projectResults) {
      if (projId !== project.id) {
        const assignedTasks = projectResults[projId].assignment;
        for (const assignment of assignedTasks) {
          updatedTasksOutOfProject.push({
            assignee: assignment.assignee,
            startTime: assignment.task.startTime,
            endTime: assignment.task.endTime
          });
        }
      }
    }
    
    const availableResources = updateAvailableResources(project, globalResourceState);
    const projectProposalResult = proposalForProject(
      { ...project, ...availableResources },
      allTasksInPast,
      updatedTasksOutOfProject,
      algorithmArgs,
      assetHasKPIWeight
    );
    
    updateGlobalResourceState(globalResourceState, projectProposalResult);
    projectResults[project.id] = projectProposalResult;
  }
  
  const finalResults = resolveConflictsAndOptimize(projectResults, sortedProjects, globalResourceState);
  
  return {
    projectResults: finalResults,
    globalResourceState
  };
}

function sortProjectsByPriorityAndTime(projects) {
  const projectsWithScore = projects.map(project => {
    const priorityScore = project.priority || 0;
    const timeScore = 100 - normalizeDate(project.startTime);
    const estimatedTime = calculateEstimatedTime(project.tasks);
    const availableTime = (new Date(project.endTime) - new Date(project.startTime)) / (24 * 60 * 60 * 1000);
    const urgencyScore = Math.min(100, (estimatedTime / availableTime) * 100);
    const importanceScore = calculateImportanceScore(project.kpiTarget);
    const totalScore = (priorityScore * 0.4) + (timeScore * 0.2) + (urgencyScore * 0.2) + (importanceScore * 0.2);
    
    return {
      ...project,
      priorityScore: totalScore
    };
  });
  
  return projectsWithScore.sort((a, b) => b.priorityScore - a.priorityScore);
}

function normalizeDate(date) {
  const now = new Date();
  const diffDays = Math.max(0, (new Date(date) - now) / (24 * 60 * 60 * 1000));
  return Math.min(100, diffDays);
}

function calculateEstimatedTime(tasks) {
  const sortedTasks = topologicalSort(tasks);
  let maxTime = 0;
  
  const paths = findCriticalPaths(sortedTasks);
  for (const path of paths) {
    const pathTime = path.reduce((sum, taskId) => {
      const task = tasks.find(t => t.id === taskId);
      return sum + (task ? task.estimateTime : 0);
    }, 0);
    maxTime = Math.max(maxTime, pathTime);
  }
  
  return maxTime;
}

function findCriticalPaths(tasks) {
  // Chuyển đổi tasks thành mảng nếu là một đối tượng
  const tasksArray = Array.isArray(tasks) ? tasks : Object.values(tasks);
  
  const paths = [];
  const startTasks = tasksArray.filter(task => !task.preceedingTasks || task.preceedingTasks.length === 0);
  const endTasks = tasksArray.filter(task => {
    return !tasksArray.some(t => t.preceedingTasks && t.preceedingTasks.includes(task.id));
  });
  
  for (const startTask of startTasks) {
    for (const endTask of endTasks) {
      const path = findLongestPath(startTask, endTask, tasksArray);
      if (path.length > 0) {
        paths.push(path);
      }
    }
  }
  
  return paths;
}

function findLongestPath(startTask, endTask, tasks) {
  const visited = new Set();
  const path = [];
  
  function dfs(current, target, currentPath) {
    if (current.id === target.id) {
      if (currentPath.length > path.length) {
        path.length = 0;
        path.push(...currentPath);
      }
      return;
    }
    
    visited.add(current.id);
    
    for (const task of tasks) {
      if (task.preceedingTasks && task.preceedingTasks.includes(current.id) && !visited.has(task.id)) {
        currentPath.push(task.id);
        dfs(task, target, currentPath);
        currentPath.pop();
      }
    }
    
    visited.delete(current.id);
  }
  
  dfs(startTask, endTask, [startTask.id]);
  return path;
}

function calculateImportanceScore(kpiTarget) {
  let score = 0;
  let totalWeight = 0;
  
  for (const key in kpiTarget) {
    const kpi = kpiTarget[key];
    score += kpi.value * kpi.weight * 100;
    totalWeight += kpi.weight;
  }
  
  return totalWeight > 0 ? score / totalWeight : 0;
}

function initializeGlobalResourceState(projects) {
  const allEmployees = new Set();
  const allAssets = {
    inUse: [],
    readyToUse: []
  };
  
  for (const project of projects) {
    for (const employee of project.employees) {
      allEmployees.add(employee.id);
    }
    
    if (project.assets) {
      if (project.assets.inUse) {
        for (const asset of project.assets.inUse) {
          if (!allAssets.inUse.some(a => a.id === asset.id)) {
            allAssets.inUse.push(asset);
          }
        }
      }
      
      if (project.assets.readyToUse) {
        for (const asset of project.assets.readyToUse) {
          if (!allAssets.readyToUse.some(a => a.id === asset.id)) {
            allAssets.readyToUse.push(asset);
          }
        }
      }
    }
  }
  
  return {
    employees: Array.from(allEmployees).map(id => {
      const project = projects.find(p => p.employees.some(e => e.id === id));
      return project ? project.employees.find(e => e.id === id) : { id };
    }),
    assets: allAssets,
    allocations: {
      employees: {},
      assets: {}
    }
  };
}

function updateAvailableResources(project, globalState) {
  const employees = project.employees.filter(employee => {
    return globalState.employees.some(e => e.id === employee.id);
  });
  
  const assets = {
    inUse: JSON.parse(JSON.stringify(globalState.assets.inUse)),
    readyToUse: JSON.parse(JSON.stringify(globalState.assets.readyToUse))
  };
  
  return {
    employees,
    assets
  };
}

function updateGlobalResourceState(globalState, projectResult) {
  for (const assignment of projectResult.assignment) {
    const { task, assignee } = assignment;
    const employeeId = assignee.id;
    
    if (!globalState.allocations.employees[employeeId]) {
      globalState.allocations.employees[employeeId] = [];
    }
    
    globalState.allocations.employees[employeeId].push({
      taskId: task.id,
      projectId: task.projectId,
      startTime: new Date(task.startTime),
      endTime: new Date(task.endTime)
    });
    
    if (assignment.assets && assignment.assets.length > 0) {
      for (const asset of assignment.assets) {
        const assetId = asset.id;
        
        if (!globalState.allocations.assets[assetId]) {
          globalState.allocations.assets[assetId] = [];
        }
        
        globalState.allocations.assets[assetId].push({
          taskId: task.id,
          projectId: task.projectId,
          startTime: new Date(task.startTime),
          endTime: new Date(task.endTime)
        });
        
        const assetIndex = globalState.assets.readyToUse.findIndex(a => a.id === assetId);
        if (assetIndex !== -1) {
          const asset = globalState.assets.readyToUse.splice(assetIndex, 1)[0];
          if (!asset.usageLogs) {
            asset.usageLogs = [];
          }
          asset.usageLogs.push({
            startDate: task.startTime,
            endDate: task.endTime
          });
          asset.status = 'in_use';
          globalState.assets.inUse.push(asset);
        } else {
          const inUseAssetIndex = globalState.assets.inUse.findIndex(a => a.id === assetId);
          if (inUseAssetIndex !== -1) {
            const asset = globalState.assets.inUse[inUseAssetIndex];
            if (!asset.usageLogs) {
              asset.usageLogs = [];
            }
            asset.usageLogs.push({
              startDate: task.startTime,
              endDate: task.endTime
            });
          }
        }
      }
    }
  }
}

function proposalForProject(project, allTasksInPast, allTasksOutOfProject, algorithmArgs, assetHasKPIWeight) {
  console.log(`Thực hiện phân bổ nguồn lực cho dự án: ${project.projectKey}`);
  
  const useAlgorithm = algorithmArgs.algorithm || 'DLHS';
  
  project.tasks = project.tasks.map(task => ({
    ...task,
    projectId: project.id
  }));
  
  if (useAlgorithm === 'DLHS') {
    return proposalForProjectWithDLHS(
      project,
      allTasksInPast,
      allTasksOutOfProject,
      algorithmArgs.DLHS_Arguments,
      assetHasKPIWeight
    );
  } else {
    return proposalForProjectWithHS_Base(
      project,
      allTasksInPast,
      allTasksOutOfProject,
      algorithmArgs.HS_Arguments,
      assetHasKPIWeight
    );
  }
}

function resolveConflictsAndOptimize(projectResults, sortedProjects, globalState) {
  console.log("Đang giải quyết xung đột và tối ưu hóa phân bổ toàn cục...");
  
  const conflicts = detectConflicts(projectResults, globalState);
  
  if (conflicts.length > 0) {
    console.log(`Phát hiện ${conflicts.length} xung đột. Đang giải quyết...`);
    resolveConflictsByPriority(conflicts, projectResults, sortedProjects);
  }
  
  balanceWorkload(projectResults, globalState);
  minimizeIdleTime(projectResults, globalState);
  optimizeGlobalKPI(projectResults, sortedProjects);
  
  return projectResults;
}

function detectConflicts(projectResults, globalState) {
  const conflicts = [];
  
  for (const employeeId in globalState.allocations.employees) {
    const assignments = globalState.allocations.employees[employeeId];
    
    assignments.sort((a, b) => a.startTime - b.startTime);
    
    for (let i = 0; i < assignments.length - 1; i++) {
      const current = assignments[i];
      const next = assignments[i + 1];
      
      if (current.endTime > next.startTime) {
        conflicts.push({
          type: 'employee',
          resourceId: employeeId,
          conflict: [
            { projectId: current.projectId, taskId: current.taskId },
            { projectId: next.projectId, taskId: next.taskId }
          ]
        });
      }
    }
  }
  
  for (const assetId in globalState.allocations.assets) {
    const usages = globalState.allocations.assets[assetId];
    
    usages.sort((a, b) => a.startTime - b.startTime);
    
    for (let i = 0; i < usages.length - 1; i++) {
      const current = usages[i];
      const next = usages[i + 1];
      
      if (current.endTime > next.startTime) {
        conflicts.push({
          type: 'asset',
          resourceId: assetId,
          conflict: [
            { projectId: current.projectId, taskId: current.taskId },
            { projectId: next.projectId, taskId: next.taskId }
          ]
        });
      }
    }
  }
  
  return conflicts;
}

function resolveConflictsByPriority(conflicts, projectResults, sortedProjects) {
  const projectPriorityMap = {};
  sortedProjects.forEach((project, index) => {
    projectPriorityMap[project.id] = sortedProjects.length - index;
  });
  
  for (const conflict of conflicts) {
    const [first, second] = conflict.conflict;
    
    const firstPriority = projectPriorityMap[first.projectId] || 0;
    const secondPriority = projectPriorityMap[second.projectId] || 0;
    
    const lowerPriorityTask = firstPriority >= secondPriority ? second : first;
    
    const projectResult = projectResults[lowerPriorityTask.projectId];
    if (projectResult) {
      const taskIndex = projectResult.assignment.findIndex(
        a => a.task.id === lowerPriorityTask.taskId
      );
      
      if (taskIndex !== -1) {
        const assignment = projectResult.assignment[taskIndex];
        const conflictingTask = assignment.task;
        
        const higherPriorityTask = firstPriority >= secondPriority ? first : second;
        const higherPriorityProject = projectResults[higherPriorityTask.projectId];
        
        if (higherPriorityProject) {
          const higherPriorityAssignment = higherPriorityProject.assignment.find(
            a => a.task.id === higherPriorityTask.taskId
          );
          
          if (higherPriorityAssignment) {
            const newStartTime = new Date(higherPriorityAssignment.task.endTime);
            const duration = conflictingTask.endTime - conflictingTask.startTime;
            
            conflictingTask.startTime = newStartTime;
            conflictingTask.endTime = new Date(newStartTime.getTime() + duration);
            
            console.log(`Đã dịch chuyển công việc ${conflictingTask.id} của dự án ${lowerPriorityTask.projectId} để giải quyết xung đột.`);
          }
        }
      }
    }
  }
}

function balanceWorkload(projectResults, globalState) {
  const employeeWorkloads = {};
  
  for (const employeeId in globalState.allocations.employees) {
    const assignments = globalState.allocations.employees[employeeId];
    let totalDuration = 0;
    
    for (const assignment of assignments) {
      const duration = assignment.endTime - assignment.startTime;
      totalDuration += duration;
    }
    
    employeeWorkloads[employeeId] = totalDuration;
  }
  
  const totalWorkload = Object.values(employeeWorkloads).reduce((a, b) => a + b, 0);
  const averageWorkload = totalWorkload / Object.keys(employeeWorkloads).length;
  
  const overloadedEmployees = [];
  const underloadedEmployees = [];
  
  for (const employeeId in employeeWorkloads) {
    const workload = employeeWorkloads[employeeId];
    
    if (workload > averageWorkload * 1.2) {
      overloadedEmployees.push({
        id: employeeId,
        workload
      });
    }
    
    if (workload < averageWorkload * 0.8) {
      underloadedEmployees.push({
        id: employeeId,
        workload
      });
    }
  }
  
  overloadedEmployees.sort((a, b) => b.workload - a.workload);
  underloadedEmployees.sort((a, b) => a.workload - b.workload);
  
  for (let i = 0; i < Math.min(overloadedEmployees.length, underloadedEmployees.length); i++) {
    const overloaded = overloadedEmployees[i];
    const underloaded = underloadedEmployees[i];
    
    const candidateTasks = [];
    
    for (const projectId in projectResults) {
      const assignments = projectResults[projectId].assignment;
      
      for (let j = 0; j < assignments.length; j++) {
        const assignment = assignments[j];
        
        if (assignment.assignee.id === overloaded.id) {
          const employee = globalState.employees.find(e => e.id === underloaded.id);
          const task = assignment.task;
          
          const hasRequiredSkills = task.requiredSkills.every(skill => 
            employee.skills.some(empSkill => 
              empSkill.name === skill.name && empSkill.value >= skill.value
            )
          );
          
          if (hasRequiredSkills) {
            candidateTasks.push({
              projectId,
              assignmentIndex: j,
              duration: task.endTime - task.startTime
            });
          }
        }
      }
    }
    
    candidateTasks.sort((a, b) => b.duration - a.duration);
    
    const targetWorkloadDiff = overloaded.workload - underloaded.workload;
    let currentTransferred = 0;
    
    for (const candidate of candidateTasks) {
      if (currentTransferred < targetWorkloadDiff / 2) {
        const assignment = projectResults[candidate.projectId].assignment[candidate.assignmentIndex];
        const newAssignee = globalState.employees.find(e => e.id === underloaded.id);
        
        assignment.assignee = newAssignee;
        
        currentTransferred += candidate.duration;
        
        console.log(`Đã chuyển công việc ${assignment.task.id} từ nhân viên ${overloaded.id} sang nhân viên ${underloaded.id}`);
      } else {
        break;
      }
    }
  }
}

function minimizeIdleTime(projectResults, globalState) {
  const employeeTimelines = {};
  
  for (const employeeId in globalState.allocations.employees) {
    const assignments = globalState.allocations.employees[employeeId];
    
    const sortedAssignments = [...assignments].sort((a, b) => a.startTime - b.startTime);
    
    const idlePeriods = [];
    
    for (let i = 0; i < sortedAssignments.length - 1; i++) {
      const current = sortedAssignments[i];
      const next = sortedAssignments[i + 1];
      
      const idleDuration = next.startTime - current.endTime;
      
      if (idleDuration > 0) {
        idlePeriods.push({
          start: current.endTime,
          end: next.startTime,
          duration: idleDuration
        });
      }
    }
    
    employeeTimelines[employeeId] = {
      assignments: sortedAssignments,
      idlePeriods
    };
  }
  
  for (const projectId in projectResults) {
    const projectResult = projectResults[projectId];
    
    const assignmentsByEmployee = {};
    
    for (const assignment of projectResult.assignment) {
      const employeeId = assignment.assignee.id;
      
      if (!assignmentsByEmployee[employeeId]) {
        assignmentsByEmployee[employeeId] = [];
      }
      
      assignmentsByEmployee[employeeId].push(assignment);
    }
    
    for (const employeeId in assignmentsByEmployee) {
      const employeeAssignments = assignmentsByEmployee[employeeId];
      
      employeeAssignments.sort((a, b) => a.task.startTime - b.task.startTime);
      
      for (let i = 1; i < employeeAssignments.length; i++) {
        const prevAssignment = employeeAssignments[i - 1];
        const currentAssignment = employeeAssignments[i];
        
        const prevTask = prevAssignment.task;
        const currentTask = currentAssignment.task;
        
        const gap = currentTask.startTime - prevTask.endTime;
        
        if (gap > 24 * 60 * 60 * 1000) {
          const canMoveEarlier = !currentTask.preceedingTasks || 
            currentTask.preceedingTasks.every(preTaskId => {
              const preTask = projectResult.assignment.find(a => a.task.id === preTaskId);
              return !preTask || preTask.task.endTime < currentTask.startTime;
            });
          
          if (canMoveEarlier) {
            const newStartTime = new Date(prevTask.endTime);
            const duration = currentTask.endTime - currentTask.startTime;
            
            currentTask.startTime = newStartTime;
            currentTask.endTime = new Date(newStartTime.getTime() + duration);
            
            console.log(`Đã dồn công việc ${currentTask.id} lên sớm hơn để giảm thời gian chết.`);
          }
        }
      }
    }
  }
}
   
function optimizeGlobalKPI(projectResults, sortedProjects) {
        console.log("Đang tối ưu hóa KPI tổng thể...");
        
        const projectKPIScores = {};
        
        for (const project of sortedProjects) {
          const projectResult = projectResults[project.id];
          
          if (projectResult) {
            const kpiScore = calculateProjectKPIScore(projectResult, project.kpiTarget);
            projectKPIScores[project.id] = kpiScore;
          }
        }
        
        const lowKPIProjects = sortedProjects
          .filter(project => {
            const score = projectKPIScores[project.id] || 0;
            return score < 70;
          })
          .sort((a, b) => a.priorityScore - b.priorityScore);
        
        for (const project of lowKPIProjects) {
          const criticalTasks = findCriticalTasksForKPI(project, projectResults[project.id]);
          
          for (const taskInfo of criticalTasks) {
            const betterAssignee = findBetterAssigneeForTask(
              taskInfo.task,
              taskInfo.currentAssignee,
              project,
              sortedProjects,
              projectResults
            );
            
            if (betterAssignee) {
              const assignment = projectResults[project.id].assignment.find(
                a => a.task.id === taskInfo.task.id
              );
              
              if (assignment) {
                assignment.assignee = betterAssignee;
                console.log(`Đã thay đổi người được giao cho công việc ${taskInfo.task.id} từ ${taskInfo.currentAssignee.id} sang ${betterAssignee.id} để cải thiện KPI.`);
              }
            }
          }
        }
      }

      function calculateProjectKPIScore(projectResult, kpiTarget) {
        let totalScore = 0;
        let totalWeight = 0;
        
        if (kpiTarget.progress) {
          const progressWeight = kpiTarget.progress.weight || 1;
          const targetProgress = kpiTarget.progress.value || 100;
          
          const completedTasks = projectResult.assignment.filter(a => 
            new Date(a.task.endTime) <= new Date()
          ).length;
          
          const totalTasks = projectResult.assignment.length;
          const actualProgress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
          
          const progressScore = Math.min(100, (actualProgress / targetProgress) * 100);
          
          totalScore += progressScore * progressWeight;
          totalWeight += progressWeight;
        }
        
        if (kpiTarget.efficiency) {
          const efficiencyWeight = kpiTarget.efficiency.weight || 1;
          const targetEfficiency = kpiTarget.efficiency.value || 90;
          
          const totalWorkHours = projectResult.assignment.reduce((total, assignment) => {
            const duration = assignment.task.endTime - assignment.task.startTime;
            return total + duration / (60 * 60 * 1000);
          }, 0);
          
          const estimatedWorkHours = projectResult.assignment.reduce((total, assignment) => {
            return total + (assignment.task.estimateTime || 0);
          }, 0);
          
          const actualEfficiency = estimatedWorkHours > 0 ? 
            Math.min(100, (estimatedWorkHours / totalWorkHours) * 100) : 0;
          
          const efficiencyScore = Math.min(100, (actualEfficiency / targetEfficiency) * 100);
          
          totalScore += efficiencyScore * efficiencyWeight;
          totalWeight += efficiencyWeight;
        }
        
        if (kpiTarget.quality) {
          const qualityWeight = kpiTarget.quality.weight || 1;
          const targetQuality = kpiTarget.quality.value || 95;
          
          const highSkillAssignments = projectResult.assignment.filter(assignment => {
            const task = assignment.task;
            const assignee = assignment.assignee;
            
            return task.requiredSkills.every(skill => {
              const assigneeSkill = assignee.skills.find(s => s.name === skill.name);
              return assigneeSkill && assigneeSkill.value >= skill.value + 1;
            });
          }).length;
          
          const qualityRatio = projectResult.assignment.length > 0 ?
            (highSkillAssignments / projectResult.assignment.length) * 100 : 0;
          
          const qualityScore = Math.min(100, (qualityRatio / targetQuality) * 100);
          
          totalScore += qualityScore * qualityWeight;
          totalWeight += qualityWeight;
        }
        
        return totalWeight > 0 ? totalScore / totalWeight : 0;
      }
      
      function findCriticalTasksForKPI(project, projectResult) {
        if (!projectResult) {
          return [];
        }
        
        const unfinishedTasks = projectResult.assignment.filter(assignment => {
          return new Date(assignment.task.endTime) > new Date();
        });
        
        const tasksWithImportance = unfinishedTasks.map(assignment => {
          const task = assignment.task;
          let importance = 0;
          
          if (task.isCritical) {
            importance += 40;
          }
          
          const dependentCount = project.tasks.filter(t => 
            t.preceedingTasks && t.preceedingTasks.includes(task.id)
          ).length;
          
          importance += dependentCount * 5;
          
          const duration = (task.endTime - task.startTime) / (24 * 60 * 60 * 1000);
          importance += Math.min(20, duration * 2);
          
          const maxSkillRequired = task.requiredSkills.reduce((max, skill) => 
            Math.max(max, skill.value), 0);
          
          importance += maxSkillRequired * 3;
          
          return {
            task,
            currentAssignee: assignment.assignee,
            importance
          };
        });
        
        tasksWithImportance.sort((a, b) => b.importance - a.importance);
        
        const criticalCount = Math.max(1, Math.ceil(tasksWithImportance.length * 0.3));
        return tasksWithImportance.slice(0, criticalCount);
      }
      
      function findBetterAssigneeForTask(task, currentAssignee, project, allProjects, projectResults) {
        const suitableEmployees = project.employees.filter(employee => {
          const hasRequiredSkills = task.requiredSkills.every(skill => 
            employee.skills.some(empSkill => 
              empSkill.name === skill.name && empSkill.value >= skill.value
            )
          );
          
          return hasRequiredSkills && employee.id !== currentAssignee.id;
        });
        
        if (suitableEmployees.length === 0) {
          return null;
        }
        
        const ratedEmployees = suitableEmployees.map(employee => {
          let score = 0;
          
          let skillMatchScore = 0;
          for (const requiredSkill of task.requiredSkills) {
            const employeeSkill = employee.skills.find(s => s.name === requiredSkill.name);
            
            if (employeeSkill) {
              const skillDiff = employeeSkill.value - requiredSkill.value;
              skillMatchScore += Math.min(3, skillDiff) * 10;
            }
          }
          score += skillMatchScore / task.requiredSkills.length;
          
          const taskStartTime = task.startTime;
          const taskEndTime = task.endTime;
          let availabilityScore = 100;
          
          for (const projectId in projectResults) {
            const assignments = projectResults[projectId].assignment;
            
            for (const assignment of assignments) {
              if (assignment.assignee.id === employee.id) {
                const assignedTask = assignment.task;
                
                if (
                  (assignedTask.startTime <= taskStartTime && assignedTask.endTime > taskStartTime) ||
                  (assignedTask.startTime < taskEndTime && assignedTask.endTime >= taskEndTime) ||
                  (assignedTask.startTime >= taskStartTime && assignedTask.endTime <= taskEndTime)
                ) {
                  availabilityScore = 0;
                  break;
                }
                
                const timeGap = Math.min(
                  Math.abs(assignedTask.endTime - taskStartTime),
                  Math.abs(assignedTask.startTime - taskEndTime)
                ) / (24 * 60 * 60 * 1000);
                
                if (timeGap < 2) {
                  availabilityScore -= (2 - timeGap) * 20;
                }
              }
            }
            
            if (availabilityScore <= 0) {
              break;
            }
          }
          
          score += Math.max(0, availabilityScore) * 0.3;
          
          const workloadScore = 100 - calculateEmployeeWorkload(employee.id, projectResults) / 2;
          score += Math.max(0, workloadScore) * 0.2;
          
          return {
            employee,
            score
          };
        });
        
        ratedEmployees.sort((a, b) => b.score - a.score);
        
        const currentAssigneeScore = calculateEmployeeScore(currentAssignee, task, projectResults);
        
        for (const rated of ratedEmployees) {
          if (rated.score > currentAssigneeScore * 1.3) {
            return rated.employee;
          }
        }
        
        return null;
      }
      
      function calculateEmployeeScore(employee, task, projectResults) {
        let score = 0;
        
        let skillMatchScore = 0;
        for (const requiredSkill of task.requiredSkills) {
          const employeeSkill = employee.skills.find(s => s.name === requiredSkill.name);
          
          if (employeeSkill) {
            const skillDiff = employeeSkill.value - requiredSkill.value;
            skillMatchScore += Math.min(3, skillDiff) * 10;
          }
        }
        score += skillMatchScore / task.requiredSkills.length;
        
        score += 30;
        
        const workloadScore = 100 - calculateEmployeeWorkload(employee.id, projectResults) / 2;
        score += Math.max(0, workloadScore) * 0.2;
        
        return score;
      }
      
      function calculateEmployeeWorkload(employeeId, projectResults) {
        let totalWorkHours = 0;
        let timeFrame = 30 * 24;
        
        for (const projectId in projectResults) {
          const assignments = projectResults[projectId].assignment;
          
          for (const assignment of assignments) {
            if (assignment.assignee.id === employeeId) {
              const task = assignment.task;
              const startTime = new Date(task.startTime);
              const endTime = new Date(task.endTime);
              
              const now = new Date();
              const futureLimit = new Date();
              futureLimit.setDate(futureLimit.getDate() + 30);
              
              if (endTime >= now && startTime <= futureLimit) {
                const effectiveStartTime = startTime > now ? startTime : now;
                const effectiveEndTime = endTime < futureLimit ? endTime : futureLimit;
                
                const durationHours = (effectiveEndTime - effectiveStartTime) / (60 * 60 * 1000);
                totalWorkHours += durationHours;
              }
            }
          }
        }
        
        return (totalWorkHours / (timeFrame * 8 / 24)) * 100;
      }
      
      function proposalForProjectWithHS_Base(
        project,
        allTasksInPast,
        allTasksOutOfProject,
        hsArguments,
        assetHasKPIWeight
      ) {
        console.log(`Áp dụng thuật toán HS cơ bản cho dự án: ${project.projectKey}`);
        
        const { startTaskIndex, endTaskIndex, tasks } = topologicalSort(project.tasks);
        
        const { earlyStart, earlyFinish, lateStart, lateFinish } = calculateCPM(
          startTaskIndex,
          endTaskIndex,
          tasks
        );
        
        const { miniKPIs, empAvailables } = getLastKPIAndAvailableEmpsInTasks(
          tasks,
          project.employees,
          project.kpiTarget,
          allTasksInPast,
          allTasksOutOfProject,
          earlyStart
        );
        
        const employeeKPIs = splitKPIToEmployeesByKMeans(
          project.employees,
          earlyFinish,
          project.kpiTarget
        );
        
        const bestMiniKPIs = findBestMiniKPIOfTasks(tasks, miniKPIs);
        
        const hasSolution = checkHasAvailableSolution(
          tasks,
          project.employees,
          empAvailables
        );
        
        if (!hasSolution) {
          console.warn("Không tìm thấy giải pháp khả thi cho dự án này.");
          return {
            success: false,
            message: "Không đủ nguồn lực để phân bổ cho tất cả công việc",
            assignment: []
          };
        }
        
        const hsResult = harmonySearch_Base(
          tasks,
          project.employees,
          empAvailables,
          project.assets || { inUse: [], readyToUse: [] },
          bestMiniKPIs,
          employeeKPIs,
          earlyStart,
          earlyFinish,
          hsArguments || {},
          assetHasKPIWeight
        );
        
        const scheduledTasks = scheduleTasksWithAssetAndEmpTasks(
          hsResult.assignments,
          tasks,
          allTasksOutOfProject
        );
        
        const rescheduledTasks = reScheduleTasks(
          scheduledTasks,
          tasks,
          allTasksOutOfProject
        );
        
        const updatedEmployeeKPIs = reSplitKPIOfEmployees(
          rescheduledTasks,
          project.employees,
          project.kpiTarget
        );
        
        return {
          success: true,
          assignment: rescheduledTasks,
          kpis: updatedEmployeeKPIs,
          projectTime: getTimeForProject(rescheduledTasks)
        };
      }
      
      function proposalForProjectWithDLHS(
        project,
        allTasksInPast,
        allTasksOutOfProject,
        dlhsArguments,
        assetHasKPIWeight
      ) {
        console.log(`Áp dụng thuật toán DLHS cho dự án: ${project.projectKey}`);
        
        const { startTaskIndex, endTaskIndex, tasks } = topologicalSort(project.tasks);
        
        const { earlyStart, earlyFinish, lateStart, lateFinish } = calculateCPM(
          startTaskIndex,
          endTaskIndex,
          tasks
        );
        
        const { miniKPIs, empAvailables } = getLastKPIAndAvailableEmpsInTasks(
          tasks,
          project.employees,
          project.kpiTarget,
          allTasksInPast,
          allTasksOutOfProject,
          earlyStart
        );
        
        const employeeKPIs = splitKPIToEmployeesByKMeans(
          project.employees,
          earlyFinish,
          project.kpiTarget
        );
        
        const bestMiniKPIs = findBestMiniKPIOfTasks(tasks, miniKPIs);
        
        const hasSolution = checkHasAvailableSolution(
          tasks,
          project.employees,
          empAvailables
        );
        
        if (!hasSolution) {
          console.warn("Không tìm thấy giải pháp khả thi cho dự án này.");
          return {
            success: false,
            message: "Không đủ nguồn lực để phân bổ cho tất cả công việc",
            assignment: []
          };
        }
        
        const dlhsResult = DLHS(
          tasks,
          project.employees,
          empAvailables,
          project.assets || { inUse: [], readyToUse: [] },
          bestMiniKPIs,
          employeeKPIs,
          earlyStart,
          earlyFinish,
          dlhsArguments || {},
          assetHasKPIWeight
        );
        
        const scheduledTasks = scheduleTasksWithAssetAndEmpTasks(
          dlhsResult.assignments,
          tasks,
          allTasksOutOfProject
        );
        
        const updatedEmployeeKPIs = reSplitKPIOfEmployees(
          scheduledTasks,
          project.employees,
          project.kpiTarget
        );
        
        return {
          success: true,
          assignment: scheduledTasks,
          kpis: updatedEmployeeKPIs,
          projectTime: getTimeForProject(scheduledTasks)
        };
      }

      module.exports = {
        allocateResourcesForMultipleProjects,
        sortProjectsByPriorityAndTime,
        normalizeDate,
        calculateEstimatedTime,
        findCriticalPaths,
        findLongestPath,
        calculateImportanceScore,
        initializeGlobalResourceState,
        updateAvailableResources,
        updateGlobalResourceState,
        proposalForProject,
        proposalForProjectWithDLHS,
        proposalForProjectWithHS_Base,
        resolveConflictsAndOptimize,
        detectConflicts,
        resolveConflictsByPriority,
        balanceWorkload,
        minimizeIdleTime,
        optimizeGlobalKPI,
        calculateProjectKPIScore,
        findCriticalTasksForKPI,
        findBetterAssigneeForTask,
        calculateEmployeeScore,
        calculateEmployeeWorkload
      };