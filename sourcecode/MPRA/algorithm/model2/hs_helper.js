// hs_helper.js
function getLastKPIAndAvailableEmpsInTasks(tasks, employees, kpiTarget, allTasksInPast, allTasksOutOfProject, earlyStart) {
    const miniKPIs = {};
    const empAvailables = {};
    
    tasks.forEach((task, index) => {
      miniKPIs[index] = [];
      empAvailables[index] = [];
      
      employees.forEach(employee => {
        if (task.requiredSkills && employee.skills) {
          const isSkillMatch = task.requiredSkills.every(requiredSkill => {
            const employeeSkill = employee.skills.find(skill => skill.name === requiredSkill.name);
            return employeeSkill && employeeSkill.value >= requiredSkill.value;
          });
          
          if (isSkillMatch) {
            const isAvailable = checkEmployeeAvailability(
              employee.id,
              earlyStart[index],
              earlyStart[index] + task.estimateTime,
              allTasksInPast,
              allTasksOutOfProject
            );
            
            if (isAvailable) {
              empAvailables[index].push(employee);
              
              if (kpiTarget) {
                const miniKPI = createMiniKPI(employee, task, kpiTarget);
                miniKPIs[index].push(miniKPI);
              }
            }
          }
        }
      });
    });
    
    return { miniKPIs, empAvailables };
  }
  
  function checkEmployeeAvailability(employeeId, startTime, endTime, allTasksInPast, allTasksOutOfProject) {
    return true;
  }
  
  function createMiniKPI(employee, task, kpiTarget) {
    const miniKPI = {
      employeeId: employee.id,
      taskId: task.id,
      weights: {}
    };
    
    for (const key in kpiTarget) {
      let skillMatch = 0;
      if (task.requiredSkills && employee.skills) {
        task.requiredSkills.forEach(requiredSkill => {
          const employeeSkill = employee.skills.find(skill => skill.name === requiredSkill.name);
          if (employeeSkill) {
            skillMatch += employeeSkill.value / requiredSkill.value;
          }
        });
        
        skillMatch = skillMatch / task.requiredSkills.length;
      }
      
      miniKPI.weights[key] = kpiTarget[key].weight * skillMatch;
    }
    
    return miniKPI;
  }
  
  function scheduleTasksWithAssetAndEmpTasks(assignments, tasks, allTasksOutOfProject) {
    const sortedAssignments = [...assignments];
    
    const preceedingTasksMap = {};
    tasks.forEach(task => {
      preceedingTasksMap[task.id] = task.preceedingTasks || [];
    });
    
    sortedAssignments.forEach(assignment => {
      const task = tasks.find(t => t.id === assignment.taskId);
      
      if (task) {
        let earliestStart = task.startTime ? new Date(task.startTime).getTime() : Date.now();
        
        const preceedingTasks = preceedingTasksMap[task.id] || [];
        preceedingTasks.forEach(precId => {
          const precAssignment = sortedAssignments.find(a => a.taskId === precId);
          if (precAssignment && precAssignment.task && precAssignment.task.endTime) {
            const precEndTime = new Date(precAssignment.task.endTime).getTime();
            earliestStart = Math.max(earliestStart, precEndTime);
          }
        });
        
        const duration = task.estimateTime * 24 * 60 * 60 * 1000;
        const endTime = new Date(earliestStart + duration);
        
        assignment.task = {
          ...task,
          startTime: new Date(earliestStart),
          endTime: endTime
        };
      }
    });
    
    return sortedAssignments;
  }
  
  function DLHS(tasks, employees, empAvailables, assets, bestMiniKPIs, employeeKPIs, earlyStart, earlyFinish, dlhsArguments, assetHasKPIWeight) {
    const HMS = dlhsArguments.HMS || 30;
    const HMCR = dlhsArguments.HMCR || 0.9;
    const PAR = dlhsArguments.PAR || 0.3;
    const NI = dlhsArguments.NI || 1000;
    
    const harmonyMemory = [];
    
    for (let i = 0; i < HMS; i++) {
      const solution = generateRandomSolution(tasks, empAvailables);
      const fitness = evaluateSolution(solution, tasks, employees, bestMiniKPIs, employeeKPIs, assetHasKPIWeight);
      
      harmonyMemory.push({ solution, fitness });
    }
    
    harmonyMemory.sort((a, b) => b.fitness - a.fitness);
    
    for (let iter = 0; iter < NI; iter++) {
      const newSolution = [];
      
      for (let i = 0; i < tasks.length; i++) {
        if (Math.random() < HMCR) {
          const randomIndex = Math.floor(Math.random() * HMS);
          const value = harmonyMemory[randomIndex].solution[i];
          
          if (Math.random() < PAR) {
            const availableEmps = empAvailables[i] || [];
            if (availableEmps.length > 0) {
              const levy = generateLevyFlight();
              const newIndex = Math.min(
                availableEmps.length - 1,
                Math.floor(Math.random() * availableEmps.length + levy) % availableEmps.length
              );
              newSolution.push(availableEmps[newIndex].id);
            } else {
              newSolution.push(value);
            }
          } else {
            newSolution.push(value);
          }
        } else {
          const availableEmps = empAvailables[i] || [];
          if (availableEmps.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableEmps.length);
            newSolution.push(availableEmps[randomIndex].id);
          } else {
            const randomIndex = Math.floor(Math.random() * employees.length);
            newSolution.push(employees[randomIndex].id);
          }
        }
      }
      
      const newFitness = evaluateSolution(newSolution, tasks, employees, bestMiniKPIs, employeeKPIs, assetHasKPIWeight);
      
      if (newFitness > harmonyMemory[HMS - 1].fitness) {
        harmonyMemory[HMS - 1] = { solution: newSolution, fitness: newFitness };
        harmonyMemory.sort((a, b) => b.fitness - a.fitness);
      }
    }
    
    const bestSolution = harmonyMemory[0].solution;
    
    const assignments = [];
    for (let i = 0; i < tasks.length; i++) {
      const empId = bestSolution[i];
      const employee = employees.find(emp => emp.id == empId);
      
      if (employee) {
        assignments.push({
          taskId: tasks[i].id,
          assignee: employee,
          assets: []
        });
      }
    }
    
    return { assignments, fitness: harmonyMemory[0].fitness };
  }
  
  function generateRandomSolution(tasks, empAvailables) {
    const solution = [];
    
    for (let i = 0; i < tasks.length; i++) {
      const availableEmps = empAvailables[i] || [];
      
      if (availableEmps.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableEmps.length);
        solution.push(availableEmps[randomIndex].id);
      } else {
        solution.push(null);
      }
    }
    
    return solution;
  }
  
  function evaluateSolution(solution, tasks, employees, bestMiniKPIs, employeeKPIs, assetHasKPIWeight) {
    let kpiScore = 0;
    let skillScore = 0;
    let workloadScore = 0;
    
    const empWorkloads = {};
    
    for (let i = 0; i < solution.length; i++) {
      const empId = solution[i];
      
      if (empId) {
        const task = tasks[i];
        const employee = employees.find(emp => emp.id == empId);
        
        if (employee && task) {
          if (bestMiniKPIs && bestMiniKPIs[task.id]) {
            const miniKPI = bestMiniKPIs[task.id];
            if (miniKPI.employeeId == empId) {
              for (const key in miniKPI.weights) {
                kpiScore += miniKPI.weights[key];
              }
            }
          }
          
          if (task.requiredSkills && employee.skills) {
            task.requiredSkills.forEach(requiredSkill => {
              const employeeSkill = employee.skills.find(skill => skill.name === requiredSkill.name);
              if (employeeSkill) {
                skillScore += Math.min(1, employeeSkill.value / requiredSkill.value);
              }
            });
          }
          
          empWorkloads[empId] = (empWorkloads[empId] || 0) + (task.estimateTime || 1);
        }
      }
    }
    
    const totalWorkload = Object.values(empWorkloads).reduce((sum, load) => sum + load, 0);
    const avgWorkload = totalWorkload / Object.keys(empWorkloads).length;
    
    for (const empId in empWorkloads) {
      const deviation = Math.abs(empWorkloads[empId] - avgWorkload);
      workloadScore += 1 / (1 + deviation);
    }
    
    const totalScore = kpiScore * 0.5 + skillScore * 0.3 + workloadScore * 0.2;
    
    return totalScore;
  }
  
  function generateLevyFlight() {
    const u = Math.random();
    const levy = -Math.log(u);
    
    return levy;
  }
  
  function harmonySearch_Base(tasks, employees, empAvailables, assets, bestMiniKPIs, employeeKPIs, earlyStart, earlyFinish, hsArguments, assetHasKPIWeight) {
    const HMS = hsArguments.HMS || 20;
    const HMCR = hsArguments.HMCR || 0.8;
    const PAR = hsArguments.PAR || 0.2;
    const BW = hsArguments.BW || 0.2;
    const NI = hsArguments.NI || 1000;
    
    const harmonyMemory = [];
    
    for (let i = 0; i < HMS; i++) {
      const solution = generateRandomSolution(tasks, empAvailables);
      const fitness = evaluateSolution(solution, tasks, employees, bestMiniKPIs, employeeKPIs, assetHasKPIWeight);
      
      harmonyMemory.push({ solution, fitness });
    }
    
    harmonyMemory.sort((a, b) => b.fitness - a.fitness);
    
    for (let iter = 0; iter < NI; iter++) {
      const newSolution = [];
      
      for (let i = 0; i < tasks.length; i++) {
        if (Math.random() < HMCR) {
          const randomIndex = Math.floor(Math.random() * HMS);
          const value = harmonyMemory[randomIndex].solution[i];
          
          if (Math.random() < PAR) {
            const availableEmps = empAvailables[i] || [];
            if (availableEmps.length > 0) {
              const currentIndex = availableEmps.findIndex(emp => emp.id === value);
              if (currentIndex !== -1) {
                const bw = Math.floor(BW * availableEmps.length);
                const newIndex = Math.max(0, Math.min(
                  availableEmps.length - 1,
                  currentIndex + Math.floor(Math.random() * bw * 2) - bw
                ));
                newSolution.push(availableEmps[newIndex].id);
              } else {
                newSolution.push(value);
              }
            } else {
              newSolution.push(value);
            }
          } else {
            newSolution.push(value);
          }
        } else {
          const availableEmps = empAvailables[i] || [];
          if (availableEmps.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableEmps.length);
            newSolution.push(availableEmps[randomIndex].id);
          } else {
            const randomIndex = Math.floor(Math.random() * employees.length);
            newSolution.push(employees[randomIndex].id);
          }
        }
      }
      
      const newFitness = evaluateSolution(newSolution, tasks, employees, bestMiniKPIs, employeeKPIs, assetHasKPIWeight);
      
      if (newFitness > harmonyMemory[HMS - 1].fitness) {
        harmonyMemory[HMS - 1] = { solution: newSolution, fitness: newFitness };
        harmonyMemory.sort((a, b) => b.fitness - a.fitness);
      }
    }
    
    const bestSolution = harmonyMemory[0].solution;
    
    const assignments = [];
    for (let i = 0; i < tasks.length; i++) {
      const empId = bestSolution[i];
      const employee = employees.find(emp => emp.id == empId);
      
      if (employee) {
        assignments.push({
          taskId: tasks[i].id,
          assignee: employee,
          assets: []
        });
      }
    }
    
    return { assignments, fitness: harmonyMemory[0].fitness };
  }
  
  function reScheduleTasks(assignments, tasks, allTasksOutOfProject) {
    return assignments;
  }
  
  module.exports = {
    getLastKPIAndAvailableEmpsInTasks,
    scheduleTasksWithAssetAndEmpTasks,
    DLHS,
    harmonySearch_Base,
    reScheduleTasks
  };