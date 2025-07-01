// helper.js
// File này cung cấp các hàm helper cơ bản cho hệ thống phân bổ nguồn lực

/**
 * Sắp xếp các công việc theo thứ tự topo
 * @param {Array} tasks - Danh sách công việc cần sắp xếp
 * @returns {Object} Danh sách công việc đã sắp xếp và chỉ số của công việc bắt đầu và kết thúc
 */
function topologicalSort(tasks) {
    // Tạo một bản sao của mảng tasks để không thay đổi đầu vào
    const tasksCopy = [...tasks];
    
    // Tạo đồ thị các phụ thuộc
    const graph = {};
    tasksCopy.forEach(task => {
      graph[task.id] = {
        task,
        dependencies: task.preceedingTasks || [],
        visited: false,
        temp: false
      };
    });
    
    // Hàm DFS để sắp xếp topo
    const sortedTasks = [];
    const dfs = (nodeId) => {
      // Kiểm tra nếu nút đã được thăm tạm thời (phát hiện chu trình)
      if (graph[nodeId].temp) {
        throw new Error("Đồ thị công việc có chu trình, không thể sắp xếp topo");
      }
      
      // Nếu nút chưa được thăm
      if (!graph[nodeId].visited) {
        // Đánh dấu là đang thăm
        graph[nodeId].temp = true;
        
        // Thăm tất cả các phụ thuộc
        for (const depId of graph[nodeId].dependencies) {
          if (graph[depId]) {
            dfs(depId);
          }
        }
        
        // Đánh dấu là đã thăm và bỏ đánh dấu tạm thời
        graph[nodeId].visited = true;
        graph[nodeId].temp = false;
        
        // Thêm vào danh sách kết quả
        sortedTasks.unshift(graph[nodeId].task);
      }
    };
    
    // Thực hiện DFS cho mỗi nút chưa thăm
    for (const nodeId in graph) {
      if (!graph[nodeId].visited) {
        dfs(nodeId);
      }
    }
    
    // Xác định chỉ số công việc bắt đầu và kết thúc
    const startTaskIndex = sortedTasks.findIndex(task => !task.preceedingTasks || task.preceedingTasks.length === 0);
    const endTaskIndex = sortedTasks.findIndex(task => {
      return !sortedTasks.some(t => t.preceedingTasks && t.preceedingTasks.includes(task.id));
    });
    
    return {
      startTaskIndex,
      endTaskIndex,
      tasks: sortedTasks
    };
  }
  
  /**
   * Tính toán phương pháp đường găng CPM
   * @param {Number} startTaskIndex - Chỉ số công việc bắt đầu
   * @param {Number} endTaskIndex - Chỉ số công việc kết thúc
   * @param {Array} tasks - Danh sách công việc đã sắp xếp
   * @returns {Object} Các thông số CPM gồm ES, EF, LS, LF
   */
  function calculateCPM(startTaskIndex, endTaskIndex, tasks) {
    const n = tasks.length;
    
    // Khởi tạo các mảng lưu trữ ES, EF, LS, LF
    const earlyStart = Array(n).fill(0);
    const earlyFinish = Array(n).fill(0);
    const lateStart = Array(n).fill(Infinity);
    const lateFinish = Array(n).fill(Infinity);
    
    // Tính toán ES, EF (Forward Pass)
    for (let i = 0; i < n; i++) {
      const task = tasks[i];
      
      if (i === startTaskIndex) {
        earlyStart[i] = 0;
      } else if (task.preceedingTasks && task.preceedingTasks.length > 0) {
        // Tìm EF lớn nhất của các công việc tiền nhiệm
        for (const precId of task.preceedingTasks) {
          const precIndex = tasks.findIndex(t => t.id === precId);
          if (precIndex !== -1) {
            earlyStart[i] = Math.max(earlyStart[i], earlyFinish[precIndex]);
          }
        }
      }
      
      earlyFinish[i] = earlyStart[i] + (task.estimateTime || 1);
    }
    
    // Tính toán LS, LF (Backward Pass)
    lateFinish[endTaskIndex] = earlyFinish[endTaskIndex];
    lateStart[endTaskIndex] = lateFinish[endTaskIndex] - (tasks[endTaskIndex].estimateTime || 1);
    
    for (let i = n - 1; i >= 0; i--) {
      if (i !== endTaskIndex) {
        lateFinish[i] = Infinity;
        
        // Tìm tất cả các công việc mà công việc hiện tại là tiền nhiệm
        for (let j = 0; j < n; j++) {
          if (tasks[j].preceedingTasks && tasks[j].preceedingTasks.includes(tasks[i].id)) {
            lateFinish[i] = Math.min(lateFinish[i], lateStart[j]);
          }
        }
        
        // Nếu không có công việc kế tiếp, sử dụng thời gian kết thúc của dự án
        if (lateFinish[i] === Infinity) {
          lateFinish[i] = earlyFinish[endTaskIndex];
        }
        
        lateStart[i] = lateFinish[i] - (tasks[i].estimateTime || 1);
      }
    }
    
    // Xác định đường găng
    const criticalPath = [];
    for (let i = 0; i < n; i++) {
      if (lateStart[i] === earlyStart[i] && lateFinish[i] === earlyFinish[i]) {
        tasks[i].isCritical = true;
        criticalPath.push(tasks[i].id);
      } else {
        tasks[i].isCritical = false;
      }
    }
    
    return {
      earlyStart,
      earlyFinish,
      lateStart,
      lateFinish,
      criticalPath
    };
  }
  
  /**
/**
 * Kiểm tra xem có giải pháp khả thi không
 * @param {Array} tasks - Danh sách công việc
 * @param {Array} employees - Danh sách nhân viên
 * @param {Object} empAvailables - Thông tin khả dụng của nhân viên
 * @returns {Boolean} Có giải pháp khả thi hay không
 */
function checkHasAvailableSolution(tasks, employees, empAvailables) {
    console.log("Đang kiểm tra khả năng có giải pháp...");
    console.log(`Tổng số nhiệm vụ: ${tasks.length}, Tổng số nhân viên: ${employees.length}`);
    
    for (const task of tasks) {
      const taskId = task.id;
      const availableEmps = empAvailables[taskId] || [];
      
      console.log(`Nhiệm vụ ${taskId}: có ${availableEmps.length} nhân viên khả dụng`);
      
      if (availableEmps.length === 0) {
        console.log(`Nhiệm vụ ${taskId} không có nhân viên khả dụng!`);
        console.log(`Yêu cầu: ${JSON.stringify(task.requireAssign)}`);
        return false;
      }
      
      let hasValidEmployee = false;
      
      // Kiểm tra xem có ít nhất một nhân viên thỏa mãn yêu cầu không
      for (const empId of availableEmps) {
        const employee = employees.find(emp => emp.id === empId);
        
        if (!employee) {
          console.log(`Không tìm thấy thông tin cho nhân viên ${empId}`);
          continue;
        }
        
        if (!task.requireAssign || !Array.isArray(task.requireAssign) || task.requireAssign.length === 0) {
          // Nếu task không yêu cầu phẩm chất cụ thể, mọi nhân viên đều có thể thực hiện
          hasValidEmployee = true;
          break;
        }
        
        if (!employee.qualities || !Array.isArray(employee.qualities)) {
          console.log(`Nhân viên ${empId} không có thông tin phẩm chất`);
          continue;
        }
        
        const isQualityMatch = task.requireAssign.every(requiredAssign => {
          const employeeQuality = employee.qualities.find(quality => quality.name === requiredAssign.name);
          return employeeQuality && employeeQuality.value >= requiredAssign.value;
        });
        
        if (isQualityMatch) {
          hasValidEmployee = true;
          break;
        }
      }
      
      if (!hasValidEmployee) {
        console.log(`Không có nhân viên nào đáp ứng yêu cầu cho nhiệm vụ ${taskId}`);
        if (task.requireAssign) {
          console.log(`Yêu cầu: ${JSON.stringify(task.requireAssign)}`);
          
          // In thông tin chi tiết về tất cả nhân viên khả dụng và phẩm chất của họ
          console.log("Chi tiết phẩm chất của nhân viên khả dụng:");
          for (const empId of availableEmps) {
            const employee = employees.find(emp => emp.id === empId);
            if (employee && employee.qualities) {
              console.log(`Nhân viên ${empId}: ${JSON.stringify(employee.qualities)}`);
            }
          }
        }
        return false;
      }
    }
    
    console.log("Tìm thấy giải pháp khả thi cho tất cả nhiệm vụ");
    return true;
  }
  
  /**
   * Tính toán thời gian của dự án dựa trên các công việc được phân bổ
   * @param {Array} assignments - Danh sách phân bổ công việc
   * @returns {Number} Thời gian dự án (ngày)
   */
  function getTimeForProject(assignments) {
    if (!assignments || assignments.length === 0) {
      return 0;
    }
    
    // Tìm thời gian bắt đầu sớm nhất và kết thúc muộn nhất
    let earliest = new Date(assignments[0].task.startTime);
    let latest = new Date(assignments[0].task.endTime);
    
    for (const assignment of assignments) {
      const startTime = new Date(assignment.task.startTime);
      const endTime = new Date(assignment.task.endTime);
      
      if (startTime < earliest) {
        earliest = startTime;
      }
      
      if (endTime > latest) {
        latest = endTime;
      }
    }
    
    // Tính số ngày
    const timeDiff = latest.getTime() - earliest.getTime();
    const days = timeDiff / (1000 * 60 * 60 * 24);
    
    return Math.ceil(days);
  }
  
  // Xuất các hàm
  module.exports = {
    topologicalSort,
    calculateCPM,
    checkHasAvailableSolution,
    getTimeForProject
  };