// k-mean.helper.js
// File cung cấp các hàm liên quan đến K-means cho phân bổ KPI

/**
 * Phân chia KPI cho nhân viên sử dụng thuật toán K-means
 * @param {Array} employees - Danh sách nhân viên
 * @param {Array} earlyFinish - Thời gian kết thúc sớm nhất của các công việc
 * @param {Object} kpiTarget - Mục tiêu KPI của dự án
 * @returns {Object} KPI được phân bổ cho từng nhân viên
 */
function splitKPIToEmployeesByKMeans(employees, earlyFinish, kpiTarget) {
    // Nếu không có KPI hoặc không có nhân viên, trả về đối tượng trống
    if (!kpiTarget || !employees || employees.length === 0) {
      return {};
    }
    
    // Tính toán trọng số KPI tổng
    let totalKPIWeight = 0;
    for (const key in kpiTarget) {
      totalKPIWeight += kpiTarget[key].weight;
    }
    
    // Nếu tổng trọng số là 0, trả về đối tượng trống
    if (totalKPIWeight === 0) {
      return {};
    }
    
    // Tạo các nhóm dựa trên kỹ năng của nhân viên
    const k = Math.min(3, employees.length); // Số lượng cụm
    const employeeClusters = kmeans(employees, k);
    
    // Phân bổ KPI cho từng nhóm
    const clusterKPIs = {};
    for (let i = 0; i < k; i++) {
      clusterKPIs[i] = {};
      for (const key in kpiTarget) {
        clusterKPIs[i][key] = (kpiTarget[key].value * kpiTarget[key].weight) / k;
      }
    }
    
    // Phân bổ KPI cho từng nhân viên
    const employeeKPIs = {};
    for (let i = 0; i < k; i++) {
      const cluster = employeeClusters[i] || [];
      const clusterSize = cluster.length;
      
      if (clusterSize > 0) {
        const kpiPerEmployee = {};
        for (const key in kpiTarget) {
          kpiPerEmployee[key] = clusterKPIs[i][key] / clusterSize;
        }
        
        for (const employee of cluster) {
          employeeKPIs[employee.id] = { ...kpiPerEmployee };
        }
      }
    }
    
    return employeeKPIs;
  }
  
  /**
   * Thuật toán K-means đơn giản để nhóm nhân viên
   * @param {Array} employees - Danh sách nhân viên
   * @param {Number} k - Số lượng cụm
   * @returns {Array} Các cụm nhân viên
   */
  function kmeans(employees, k) {
    // Khởi tạo các cụm ban đầu ngẫu nhiên
    const clusters = Array(k).fill().map(() => []);
    
    // Phân bổ nhân viên vào các cụm ban đầu
    employees.forEach((employee, index) => {
      const clusterIndex = index % k;
      clusters[clusterIndex].push(employee);
    });
    
    // Thực hiện thuật toán K-means (đơn giản hóa, không lặp lại)
    // Trong trường hợp thực tế, cần lặp lại cho đến khi hội tụ
    
    return clusters;
  }
  
  /**
   * Tìm mini-KPI tốt nhất cho mỗi công việc
   * @param {Array} tasks - Danh sách công việc
   * @param {Object} miniKPIs - Danh sách mini-KPI
   * @returns {Object} Mini-KPI tốt nhất cho mỗi công việc
   */
  function findBestMiniKPIOfTasks(tasks, miniKPIs) {
    const bestMiniKPIs = {};
    
    tasks.forEach((task, index) => {
      if (miniKPIs[index]) {
        // Tìm mini-KPI tốt nhất cho công việc này
        let bestKPI = null;
        let maxScore = -1;
        
        for (const kpi of miniKPIs[index]) {
          // Tính điểm cho KPI này (đơn giản hóa)
          const score = calculateKPIScore(kpi, task);
          
          if (score > maxScore) {
            maxScore = score;
            bestKPI = kpi;
          }
        }
        
        bestMiniKPIs[task.id] = bestKPI;
      }
    });
    
    return bestMiniKPIs;
  }
  
  /**
   * Tính điểm cho KPI trong một công việc (đơn giản hóa)
   * @param {Object} kpi - KPI cần đánh giá
   * @param {Object} task - Công việc
   * @returns {Number} Điểm KPI
   */
  function calculateKPIScore(kpi, task) {
    // Đơn giản hóa: Sử dụng trọng số KPI
    let score = 0;
    
    if (kpi && kpi.weights) {
      for (const key in kpi.weights) {
        score += kpi.weights[key] || 0;
      }
    }
    
    return score;
  }
  
  /**
   * Phân chia lại KPI dựa trên kết quả phân bổ
   * @param {Array} assignments - Danh sách phân bổ
   * @param {Array} employees - Danh sách nhân viên
   * @param {Object} kpiTarget - Mục tiêu KPI
   * @returns {Object} KPI được phân bổ lại
   */
  function reSplitKPIOfEmployees(assignments, employees, kpiTarget) {
    // Tạo đối tượng lưu trữ KPI của nhân viên
    const employeeKPIs = {};
    
    // Khởi tạo KPI cho mỗi nhân viên
    employees.forEach(employee => {
      employeeKPIs[employee.id] = {};
      for (const key in kpiTarget) {
        employeeKPIs[employee.id][key] = 0;
      }
    });
    
    // Nếu không có assignments, trả về KPI trống
    if (!assignments || assignments.length === 0) {
      return employeeKPIs;
    }
    
    // Đếm số lượng công việc của mỗi nhân viên
    const employeeAssignmentCount = {};
    assignments.forEach(assignment => {
      const empId = assignment.assignee.id;
      employeeAssignmentCount[empId] = (employeeAssignmentCount[empId] || 0) + 1;
    });
    
    // Tổng số công việc
    const totalAssignments = assignments.length;
    
    // Phân bổ KPI dựa trên tỷ lệ công việc
    for (const empId in employeeAssignmentCount) {
      const ratio = employeeAssignmentCount[empId] / totalAssignments;
      
      for (const key in kpiTarget) {
        employeeKPIs[empId][key] = kpiTarget[key].value * ratio;
      }
    }
    
    return employeeKPIs;
  }
  
  // Xuất các hàm
  module.exports = {
    splitKPIToEmployeesByKMeans,
    findBestMiniKPIOfTasks,
    reSplitKPIOfEmployees
  };