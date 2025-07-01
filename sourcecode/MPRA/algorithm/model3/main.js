const fs = require('fs');
const path = require('path');

// const { projects } = require('../../data/input/projects');
const {projects} = require('./convertdata.js');
console.log(projects);
for (const project of projects) {
    const kpiTarget = {
        'A': { value: 0.6, weight: 1 }

    }
    project.kpiTarget = kpiTarget;
}
const startT =  performance.now();
function multiProjectResourceAllocation(projects) {
    const allTasks = extractAllTasks(projects);
    const allEmployees = extractAllEmployees(projects);
    const projectDependencies = buildProjectDependencyGraph(projects);
    const sortedProjects = sortProjects(projects, projectDependencies);
    const taskDependencyGraph = buildCrossProjectTaskGraph(allTasks, sortedProjects);
    const sortedTasks = topologicalSortTasks(taskDependencyGraph, allTasks);
    const tasksWithCPM = calculateCPM(sortedTasks, allTasks);
    const assignmentPlan = assignResources(tasksWithCPM, allEmployees, projects);
    const finalSchedule = adjustSchedule(assignmentPlan, sortedProjects, allTasks, allEmployees);
    const metrics = calculateMetrics(finalSchedule, projects);
    
    return { schedule: finalSchedule, metrics: metrics };
  }
  
  function extractAllTasks(projects) {
    const allTasks = [];
    
    projects.forEach(project => {
      if (project.tasks && Array.isArray(project.tasks)) {
        const tasksWithProjectRef = project.tasks.map(task => ({
          ...task,
          projectId: project.id,
          projectKey: project.projectKey
        }));
        allTasks.push(...tasksWithProjectRef);
      }
    });
    
    return allTasks;
  }
  
  function extractAllEmployees(projects) {
    const uniqueEmployees = new Map();
    
    projects.forEach(project => {
      if (project.employees && Array.isArray(project.employees)) {
        project.employees.forEach(employee => {
          if (!uniqueEmployees.has(employee.id)) {
            uniqueEmployees.set(employee.id, employee);
          }
        });
      }
    });
    
    return Array.from(uniqueEmployees.values());
  }
  
  function buildProjectDependencyGraph(projects) {
    const graph = new Map();
    
    projects.forEach(project => {
      graph.set(project.id, []);
    });
    
    return graph;
  }
  
  function sortProjects(projects, dependencyGraph) {
    return [...projects].sort((a, b) => 
      new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
    );
  }
  
  function buildCrossProjectTaskGraph(allTasks, sortedProjects) {
    const graph = new Map();
    const taskMap = new Map();
    
    allTasks.forEach(task => {
      taskMap.set(task.id, task);
      graph.set(task.id, []);
    });
    
    allTasks.forEach(task => {
      if (task.preceedingTasks && Array.isArray(task.preceedingTasks)) {
        task.preceedingTasks.forEach(precTaskId => {
          if (graph.has(task.id) && taskMap.has(precTaskId)) {
            const dependencyList = graph.get(task.id) || [];
            dependencyList.push(precTaskId);
            graph.set(task.id, dependencyList);
          }
        });
      }
    });
    
    return { graph, taskMap };
  }
  
  function topologicalSortTasks(graphData, allTasks) {
    const { graph, taskMap } = graphData;
    const visited = new Set();
    const temp = new Set();
    const order = [];
    
    function dfs(nodeId) {
      if (temp.has(nodeId)) {
        throw new Error(`Chu trình phát hiện tại công việc: ${nodeId}`);
      }
      
      if (!visited.has(nodeId)) {
        temp.add(nodeId);
        
        const dependencies = graph.get(nodeId) || [];
        dependencies.forEach(depId => {
          dfs(depId);
        });
        
        temp.delete(nodeId);
        visited.add(nodeId);
        order.push(nodeId);
      }
    }
    
    Array.from(graph.keys()).forEach(nodeId => {
      if (!visited.has(nodeId)) {
        dfs(nodeId);
      }
    });
    
    return order.reverse().map(id => taskMap.get(id));
  }
  
  function calculateCPM(sortedTasks, allTasks) {
    const taskMap = new Map();
    
    // Xây dựng bản đồ công việc
    allTasks.forEach(task => {
      taskMap.set(task.id, {
        ...task,
        ES: 0,
        EF: 0,
        LS: 0,
        LF: 0
      });
    });
    
    // Tính toán ES và EF (đi xuôi)
    sortedTasks.forEach(task => {
      const taskWithCPM = taskMap.get(task.id);
      
      // Tìm ES dựa trên công việc tiền nhiệm
      let earliestStart = 0;
      if (task.preceedingTasks && task.preceedingTasks.length > 0) {
        earliestStart = Math.max(...task.preceedingTasks.map(precId => {
          const precTask = taskMap.get(precId);
          return precTask ? precTask.EF : 0;
        }));
      }
      
      const duration = task.estimateTime * 8; // Chuyển thành giờ
      
      taskWithCPM.ES = earliestStart;
      taskWithCPM.EF = earliestStart + duration;
      
      taskMap.set(task.id, taskWithCPM);
    });
    
    // Tìm thời gian kết thúc dự án
    const projectEnd = Math.max(...Array.from(taskMap.values()).map(t => t.EF));
    
    // Tính toán LS và LF (đi ngược)
    for (let i = sortedTasks.length - 1; i >= 0; i--) {
      const task = sortedTasks[i];
      const taskWithCPM = taskMap.get(task.id);
      
      // Tìm tất cả công việc phụ thuộc vào công việc này
      const successors = [];
      allTasks.forEach(t => {
        if (t.preceedingTasks && t.preceedingTasks.includes(task.id)) {
          successors.push(taskMap.get(t.id));
        }
      });
      
      if (successors.length === 0) {
        // Nếu không có công việc sau, LF = thời gian kết thúc dự án
        taskWithCPM.LF = projectEnd;
      } else {
        // LF = min(LS của các công việc sau)
        taskWithCPM.LF = Math.min(...successors.map(s => s.LS));
      }
      
      const duration = task.estimateTime * 8; // Chuyển thành giờ
      taskWithCPM.LS = taskWithCPM.LF - duration;
      
      taskMap.set(task.id, taskWithCPM);
    }
    
    return Array.from(taskMap.values());
  }
  
  function calculatePerformanceMatrix(tasks, employees) {
    const matrix = new Map();
    
    tasks.forEach(task => {
      const taskPerf = new Map();
      
      employees.forEach(employee => {
        let compatibilityScore = 0;
        let totalWeight = 0;
        
        Object.entries(task.requireAssign || {}).forEach(([skill, reqLevel]) => {
          if (employee.qualities && employee.qualities[skill] !== undefined) {
            const empLevel = employee.qualities[skill];
            const weight = 1;
            
            const skillMatch = empLevel >= reqLevel ? 1 : empLevel / reqLevel;
            
            compatibilityScore += skillMatch * weight;
            totalWeight += weight;
          }
        });
        
        const finalScore = totalWeight > 0 ? compatibilityScore / totalWeight : 0;
        taskPerf.set(employee.id, finalScore);
      });
      
      matrix.set(task.id, taskPerf);
    });
    
    return matrix;
  }
  
  function assignResources(tasksWithCPM, allEmployees, projects) {
    const performanceMatrix = calculatePerformanceMatrix(tasksWithCPM, allEmployees);
    return dynamicLocalHarmonySearch(tasksWithCPM, allEmployees, performanceMatrix, projects);
  }
  
  function dynamicLocalHarmonySearch(tasks, employees, performanceMatrix, projects) {
    const HMS = 20;
    const HMCR = 0.9;
    const PAR = 0.3;
    const NI = 1000;
    
    let harmonyMemory = initializeHarmonyMemory(HMS, tasks, employees, performanceMatrix);
    
    for (let i = 0; i < NI; i++) {
      const newSolution = improviseSolution(harmonyMemory, tasks, employees, HMCR, PAR, performanceMatrix);
      
      const newFitness = evaluateSolution(newSolution, tasks, employees, projects);
      
      let worstIndex = 0;
      let worstFitness = evaluateSolution(harmonyMemory[0], tasks, employees, projects);
      
      for (let j = 1; j < HMS; j++) {
        const currentFitness = evaluateSolution(harmonyMemory[j], tasks, employees, projects);
        if (currentFitness < worstFitness) {
          worstIndex = j;
          worstFitness = currentFitness;
        }
      }
      
      if (newFitness > worstFitness) {
        harmonyMemory[worstIndex] = newSolution;
      }
    }
    
    let bestSolution = harmonyMemory[0];
    let bestFitness = evaluateSolution(bestSolution, tasks, employees, projects);
    
    for (let i = 1; i < HMS; i++) {
      const currentFitness = evaluateSolution(harmonyMemory[i], tasks, employees, projects);
      if (currentFitness > bestFitness) {
        bestSolution = harmonyMemory[i];
        bestFitness = currentFitness;
      }
    }
    
    return bestSolution;
  }
  
  function initializeHarmonyMemory(HMS, tasks, employees, performanceMatrix) {
    const memory = [];
    
    for (let i = 0; i < HMS; i++) {
      const solution = {};
      
      tasks.forEach(task => {
        const taskId = task.id;
        const compatibleEmployees = [];
        
        employees.forEach(emp => {
          const compatibility = performanceMatrix.get(taskId).get(emp.id) || 0;
          if (compatibility > 0.5) {
            compatibleEmployees.push(emp);
          }
        });
        
        if (compatibleEmployees.length > 0) {
          const randomIndex = Math.floor(Math.random() * compatibleEmployees.length);
          solution[taskId] = compatibleEmployees[randomIndex].id;
        } else {
          const randomEmpIndex = Math.floor(Math.random() * employees.length);
          solution[taskId] = employees[randomEmpIndex].id;
        }
      });
      
      memory.push(solution);
    }
    
    return memory;
  }
  
  function improviseSolution(harmonyMemory, tasks, employees, HMCR, PAR, performanceMatrix) {
    const newSolution = {};
    
    tasks.forEach(task => {
      const taskId = task.id;
      
      if (Math.random() < HMCR) {
        const randomMemoryIndex = Math.floor(Math.random() * harmonyMemory.length);
        newSolution[taskId] = harmonyMemory[randomMemoryIndex][taskId];
        
        if (Math.random() < PAR) {
          const compatibleEmployees = [];
          employees.forEach(emp => {
            const compatibility = performanceMatrix.get(taskId).get(emp.id) || 0;
            if (compatibility > 0.5) {
              compatibleEmployees.push(emp);
            }
          });
          
          if (compatibleEmployees.length > 0) {
            const randomIndex = Math.floor(Math.random() * compatibleEmployees.length);
            newSolution[taskId] = compatibleEmployees[randomIndex].id;
          }
        }
      } else {
        const randomEmpIndex = Math.floor(Math.random() * employees.length);
        newSolution[taskId] = employees[randomEmpIndex].id;
      }
    });
    
    return newSolution;
  }
  
  function evaluateSolution(solution, tasks, employees, projects) {
    let score = 0;
    
    // Đánh giá sự phù hợp giữa nhân viên và công việc
    tasks.forEach(task => {
      const assignedEmpId = solution[task.id];
      if (!assignedEmpId) return;
      
      const employee = employees.find(emp => emp.id === assignedEmpId);
      if (!employee) return;
      
      // Tính điểm dựa trên mức độ phù hợp về kỹ năng
      let skillMatchScore = 0;
      let totalRequirements = 0;
      
      Object.entries(task.requireAssign || {}).forEach(([skill, reqLevel]) => {
        if (employee.qualities && employee.qualities[skill] !== undefined) {
          const empLevel = employee.qualities[skill];
          
          // Phát 100% điểm nếu nhân viên đáp ứng yêu cầu, hoặc tỷ lệ tương ứng
          const matchScore = empLevel >= reqLevel ? 1 : empLevel / reqLevel;
          skillMatchScore += matchScore;
          totalRequirements++;
        }
      });
      
      if (totalRequirements > 0) {
        const avgSkillMatch = skillMatchScore / totalRequirements;
        score += avgSkillMatch * 10; // Quy đổi thành thang điểm 10
      }
    });
    
    // Đánh giá mức độ cân bằng khối lượng công việc
    const workloadByEmployee = {};
    
    tasks.forEach(task => {
      const assignedEmpId = solution[task.id];
      if (!assignedEmpId) return;
      
      workloadByEmployee[assignedEmpId] = (workloadByEmployee[assignedEmpId] || 0) + task.estimateTime;
    });
    
    // Tính độ lệch chuẩn của khối lượng công việc
    const workloads = Object.values(workloadByEmployee);
    if (workloads.length > 0) {
      const avgWorkload = workloads.reduce((sum, w) => sum + w, 0) / workloads.length;
      const variance = workloads.reduce((sum, w) => sum + Math.pow(w - avgWorkload, 2), 0) / workloads.length;
      const stdDev = Math.sqrt(variance);
      
      // Ưu tiên các giải pháp có độ lệch chuẩn thấp (phân bổ đồng đều)
      score += 10 / (1 + stdDev);
    }
    
    // Đánh giá mức độ đạt KPI
    projects.forEach(project => {
      if (!project.kpiTarget) return;
      
      Object.entries(project.kpiTarget).forEach(([kpiType, kpiData]) => {
        const targetValue = kpiData.value;
        let achievedValue = 0;
        
        // Tính KPI đạt được từ các công việc trong dự án
        const projectTasks = tasks.filter(t => t.projectKey === project.projectKey);
        projectTasks.forEach(task => {
          const kpiItems = task.kpiInTask || [];
          const kpiItem = kpiItems.find(k => k.type === kpiType);
          
          if (kpiItem && solution[task.id]) {
            achievedValue += kpiItem.weight;
          }
        });
        
        // Cho điểm dựa trên mức độ đạt KPI
        const kpiRatio = achievedValue / targetValue;
        score += kpiRatio * 20; // Quy đổi thành thang điểm 20
      });
    });
    
    // Kiểm tra xung đột lịch trình
    const conflicts = checkScheduleConflicts(solution, tasks);
    score -= conflicts * 5; // Trừ điểm cho mỗi xung đột
    
    return score;
  }
  
  function checkScheduleConflicts(solution, tasks) {
    const scheduleByEmployee = {};
    let conflicts = 0;
    
    tasks.forEach(task => {
      const assignedEmpId = solution[task.id];
      if (!assignedEmpId) return;
      
      if (!scheduleByEmployee[assignedEmpId]) {
        scheduleByEmployee[assignedEmpId] = [];
      }
      
      const startTime = new Date(task.startTime).getTime();
      const endTime = new Date(task.endTime).getTime();
      
      // Kiểm tra xung đột với các công việc khác của nhân viên
      scheduleByEmployee[assignedEmpId].forEach(existingTask => {
        const existingStart = new Date(existingTask.startTime).getTime();
        const existingEnd = new Date(existingTask.endTime).getTime();
        
        // Xung đột nếu có phần giao nhau
        if (!(endTime <= existingStart || startTime >= existingEnd)) {
          conflicts++;
        }
      });
      
      scheduleByEmployee[assignedEmpId].push(task);
    });
    
    return conflicts;
  }
  
  function adjustSchedule(assignmentPlan, sortedProjects, tasks, employees) {
    const schedule = {};
    const employeeSchedules = {};
    
    // Sắp xếp công việc theo thứ tự thời gian bắt đầu
    const sortedTasks = [...tasks].sort((a, b) => 
      new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
    );
    
    // Khởi tạo lịch làm việc cho nhân viên
    employees.forEach(emp => {
      employeeSchedules[emp.id] = [];
    });
    
    // Phân bổ lịch trình cho mỗi công việc
    sortedTasks.forEach(task => {
      const assignedEmpId = assignmentPlan[task.id];
      if (!assignedEmpId) return;
      
      const empSchedule = employeeSchedules[assignedEmpId] || [];
      
      let startTime = new Date(task.startTime).getTime();
      const duration = task.estimateTime * 8 * 60 * 60 * 1000; // Chuyển sang mili giây
      let endTime = startTime + duration;
      
      // Kiểm tra xung đột lịch
      let hasConflict = true;
      while (hasConflict) {
        hasConflict = false;
        
        for (const existingTask of empSchedule) {
          const existingStart = new Date(existingTask.startTime).getTime();
          const existingEnd = new Date(existingTask.endTime).getTime();
          
          // Nếu có xung đột, dời lịch công việc hiện tại
          if (!(endTime <= existingStart || startTime >= existingEnd)) {
            hasConflict = true;
            startTime = existingEnd;
            endTime = startTime + duration;
            break;
          }
        }
      }
      
      // Cập nhật lịch trình
      const adjustedTask = {
        ...task,
        startTime: new Date(startTime).toISOString(),
        endTime: new Date(endTime).toISOString(),
        assignedEmployee: assignedEmpId
      };

      // Đảm bảo không có xung đột lịch trình
      empSchedule.push({
        startTime: new Date(startTime).toISOString(),
        endTime: new Date(endTime).toISOString(),
        taskId: task.id // Thêm taskId để dễ dàng theo dõi công việc
      });
      
      schedule[task.id] = adjustedTask;
      empSchedule.push(adjustedTask);
      employeeSchedules[assignedEmpId] = empSchedule;
    });
    
    return schedule;
  }
  
  function calculateMetrics(finalSchedule, projects) {
    // Tính thời gian thực hiện
    let earliestStart = Infinity;
    let latestEnd = 0;
    
    Object.values(finalSchedule).forEach(task => {
      const startTime = new Date(task.startTime).getTime();
      const endTime = new Date(task.endTime).getTime();
      
      if (startTime < earliestStart) earliestStart = startTime;
      if (endTime > latestEnd) latestEnd = endTime;
    });
    
    const totalDuration = (latestEnd - earliestStart) / (24 * 60 * 60 * 1000); // Chuyển sang ngày
    
    // Tính tổng chi phí
    let totalCost = 0;
    
    Object.values(finalSchedule).forEach(task => {
      const taskDuration = task.estimateTime;
      const employeeId = task.assignedEmployee;
      
      // Tìm thông tin chi phí của nhân viên
      const employee = projects.flatMap(p => p.employees || [])
        .find(emp => emp.id === employeeId);
      
      if (employee) {
        totalCost += taskDuration * 8 * employee.costPerHour; // Giả sử 8 giờ làm việc một ngày
      }
    });
    
    // Tính tỷ lệ đạt KPI
    let totalKPITargets = 0;
    let achievedKPITargets = 0;
    
    projects.forEach(project => {
      if (!project.kpiTarget) return;
      
      Object.entries(project.kpiTarget).forEach(([kpiType, kpiData]) => {
        totalKPITargets++;
        const targetValue = kpiData.value;
        let achievedValue = 0;
        
        // Tính KPI đạt được từ các công việc trong dự án
        const projectTasks = Object.values(finalSchedule)
          .filter(t => t.projectKey === project.projectKey);
        
        projectTasks.forEach(task => {
          const kpiItems = task.kpiInTask || [];
          const kpiItem = kpiItems.find(k => k.type === kpiType);
          
          if (kpiItem) {
            achievedValue += kpiItem.weight;
          }
        });
        
        if (achievedValue >= targetValue) {
          achievedKPITargets++;
        }
      });
    });
    
    const kpiAchievementRate = totalKPITargets > 0 ? achievedKPITargets / totalKPITargets : 0;
    
    // Tính tỷ lệ sử dụng nguồn lực
    const allEmployees = projects.flatMap(p => p.employees || []);
    const employeeIds = new Set(allEmployees.map(emp => emp.id));
    const usedEmployeeIds = new Set(Object.values(finalSchedule).map(task => task.assignedEmployee));
    
    const resourceUtilizationRate = employeeIds.size > 0 ? usedEmployeeIds.size / employeeIds.size : 0;
    
    return {
      totalDuration: totalDuration,
      totalCost: totalCost,
      kpiAchievementRate: kpiAchievementRate,
      resourceUtilizationRate: resourceUtilizationRate,
      startDate: new Date(earliestStart).toISOString(),
      endDate: new Date(latestEnd).toISOString()
    };
  }
  
  // Hàm chính để sử dụng
  function optimizeMultiProjectAllocation(projects) {
    return multiProjectResourceAllocation(projects);
  }





  /// hàm in

  function printAllocationResultToTXT(result) {
    const { schedule, metrics } = result;
    
    let output = "KẾT QUẢ PHÂN BỔ NGUỒN LỰC CHO NHIỀU DỰ ÁN\n";
    output += "============================================\n\n";
    
    // In thông tin tổng quan
    output += "THÔNG TIN TỔNG QUAN:\n";
    output += "-------------------\n";
    output += `Thời gian bắt đầu: ${new Date(metrics.startDate).toLocaleString()}\n`;
    output += `Thời gian kết thúc: ${new Date(metrics.endDate).toLocaleString()}\n`;
    output += `Tổng thời gian thực hiện: ${metrics.totalDuration.toFixed(2)} ngày\n`;
    output += `Tổng chi phí: ${metrics.totalCost.toLocaleString()} VNĐ\n`;
    output += `Tỷ lệ đạt KPI: ${(metrics.kpiAchievementRate * 100).toFixed(2)}%\n`;
    output += `Tỷ lệ sử dụng nguồn lực: ${(metrics.resourceUtilizationRate * 100).toFixed(2)}%\n\n`;
    
    // Sắp xếp công việc theo thời gian bắt đầu
    const sortedTasks = Object.values(schedule).sort((a, b) => 
      new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
    );
    
    // In lịch trình chi tiết
    output += "LỊCH TRÌNH CHI TIẾT CÔNG VIỆC:\n";
    output += "------------------------------\n";
    output += "MÃ CÔNG VIỆC | TÊN CÔNG VIỆC | NHÂN VIÊN | BẮT ĐẦU | KẾT THÚC | DỰ ÁN\n";
    
    sortedTasks.forEach(task => {
      const startTime = new Date(task.startTime).toLocaleString();
      const endTime = new Date(task.endTime).toLocaleString();
      
      output += `${task.code.padEnd(12)} | ${task.name.substring(0, 20).padEnd(20)} | `;
      output += `${task.assignedEmployee}`;
      output += `${endTime.padEnd(16)} | ${task.projectKey}\n`;
    });
    
    output += "\n";
    
    // Phân loại công việc theo dự án
    const tasksByProject = {};
    sortedTasks.forEach(task => {
      if (!tasksByProject[task.projectKey]) {
        tasksByProject[task.projectKey] = [];
      }
      tasksByProject[task.projectKey].push(task);
    });
    
    // In phân bổ theo dự án
    output += "PHÂN BỔ THEO DỰ ÁN:\n";
    output += "------------------\n";
    
    Object.entries(tasksByProject).forEach(([projectKey, tasks]) => {
      output += `\nDỰ ÁN: ${projectKey}\n`;
      output += `Số lượng công việc: ${tasks.length}\n`;
      
      // Tính thời gian và chi phí cho dự án
      const projectStart = Math.min(...tasks.map(t => new Date(t.startTime).getTime()));
      const projectEnd = Math.max(...tasks.map(t => new Date(t.endTime).getTime()));
      const projectDuration = (projectEnd - projectStart) / (24 * 60 * 60 * 1000);
      
      output += `Thời gian bắt đầu: ${new Date(projectStart).toLocaleString()}\n`;
      output += `Thời gian kết thúc: ${new Date(projectEnd).toLocaleString()}\n`;
      output += `Tổng thời gian: ${projectDuration.toFixed(2)} ngày\n\n`;
      
      output += "DANH SÁCH CÔNG VIỆC:\n";
      output += "- ".repeat(30) + "\n";
      
      tasks.forEach(task => {
        const startTime = new Date(task.startTime).toLocaleString();
        const endTime = new Date(task.endTime).toLocaleString();
        
        output += `${task.code}: ${task.name}\n`;
        output += `  Nhân viên: ${task.assignedEmployee}\n`;
        output += `  Thời gian: ${startTime} - ${endTime}\n`;
        output += `  Ước tính: ${task.estimateTime} ngày\n`;
        output += "- ".repeat(30) + "\n";
      });
    });
    
    // Phân loại công việc theo nhân viên
    const tasksByEmployee = {};
    sortedTasks.forEach(task => {
      if (!tasksByEmployee[task.assignedEmployee]) {
        tasksByEmployee[task.assignedEmployee] = [];
      }
      tasksByEmployee[task.assignedEmployee].push(task);
    });
    
    // In phân bổ theo nhân viên
    output += "\nPHÂN BỔ THEO NHÂN VIÊN:\n";
    output += "----------------------\n";
    
    Object.entries(tasksByEmployee).forEach(([empId, tasks]) => {
      output += `\nNHÂN VIÊN: ${empId}\n`;
      output += `Số công việc được giao: ${tasks.length}\n`;
      
      // Tính tổng thời gian làm việc
      const totalWorkDays = tasks.reduce((sum, t) => sum + t.estimateTime, 0);
      output += `Tổng thời gian làm việc ước tính: ${totalWorkDays.toFixed(2)} ngày\n\n`;
      
      output += "DANH SÁCH CÔNG VIỆC:\n";
      output += "- ".repeat(30) + "\n";
      
      tasks.sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())
        .forEach(task => {
          const startTime = new Date(task.startTime).toLocaleString();
          const endTime = new Date(task.endTime).toLocaleString();
          
          output += `${task.code}: ${task.name}\n`;
          output += `  Dự án: ${task.projectKey}\n`;
          output += `  Thời gian: ${startTime} - ${endTime}\n`;
          output += `  Ước tính: ${task.estimateTime} ngày\n`;
          output += "- ".repeat(30) + "\n";
        });
    });
    
    return output;
  }
  
  // Hàm sử dụng để tạo file và tải xuống trong môi trường trình duyệt
  function downloadTXT(text, filename) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    
    element.style.display = 'none';
    document.body.appendChild(element);
    
    element.click();
    
    document.body.removeChild(element);
  }
  
  // Hàm sử dụng để phân bổ và lưu kết quả
  function optimizeAndSaveResult(projects) {
    const result = optimizeMultiProjectAllocation(projects);
    const txtContent = printAllocationResultToTXT(result);
    
    // Trong Node.js, bạn có thể sử dụng fs.writeFileSync để lưu file
    if (typeof window === 'undefined') {
      const fs = require('fs');
      fs.writeFileSync('ket_qua_phan_bo.txt', txtContent);
      console.log('Đã lưu kết quả vào file ket_qua_phan_bo.txt');
    } else {
      // Trong trình duyệt, tải file xuống
      downloadTXT(txtContent, 'ket_qua_phan_bo.txt');
    }
    
    return result;
  }
   
  
  optimizeAndSaveResult(projects)

const endT = performance.now();

console.log(`Thời gian thực hiện: ${(endT - startT) / 1000} giây`);