// test_allocation_real_data.js
const { allocateResourcesForMultipleProjects } = require('./multi_project_allocation');
const { projects } = require('../../data/input/projects');


// thên KPI cho từng dự án
for (const project of projects) {
    const kpiTarget = {
        'A': { value: 0.6, weight: 1 }
    }
    project.kpiTarget = kpiTarget;
}
// Hàm chính để thực hiện test với dữ liệu thực tế
function runTest() {
  console.log('Bắt đầu kiểm tra phân bổ nguồn lực với dữ liệu thực từ dự án ENTMQMAAS_4xxxx...');
  
  // Lấy dữ liệu dự án từ tệp dữ liệu thực tế
  const projectsToAllocate = projects;
  
  // Danh sách công việc đã thực hiện trong quá khứ (trống trong ví dụ này)
  const allTasksInPast = [];
  
  // Danh sách công việc đang thực hiện ngoài dự án (trống trong ví dụ này)
  const allTasksOutOfProject = [];
  
  // Tham số thuật toán
  const algorithmArgs = {
    algorithm: 'DLHS',
    DLHS_Arguments: {
      HMS: 30,  // Harmony Memory Size
      HMCR: 0.9, // Harmony Memory Considering Rate
      PAR: 0.3,  // Pitch Adjusting Rate
      NI: 1000   // Number of Improvisations
    },
    HS_Arguments: {
      HMS: 20,
      HMCR: 0.8,
      PAR: 0.2,
      BW: 0.2,   // Bandwidth
      NI: 1000
    }
  };
  
  // Trọng số KPI của tài sản
  const assetHasKPIWeight = 0.2;
  
  try {
    // Thực hiện phân bổ nguồn lực
    const result = allocateResourcesForMultipleProjects(
      projectsToAllocate,
      allTasksInPast,
      allTasksOutOfProject,
      algorithmArgs,
      assetHasKPIWeight
    );
    
    // In kết quả
    console.log('\n========== KẾT QUẢ PHÂN BỔ NGUỒN LỰC ==========');
    
    for (const projectId in result.projectResults) {
      const project = projectsToAllocate.find(p => p.id.toString() === projectId);
      const projectResult = result.projectResults[projectId];
      
      console.log(`\n----- Dự án: ${project.projectName} -----`);
      
      if (projectResult.success) {
        console.log(`Thời gian dự kiến: ${projectResult.projectTime} ngày`);
        console.log(`Số công việc phân bổ: ${projectResult.assignment.length}`);
        
        console.log('\nChi tiết phân bổ (mẫu 10 công việc đầu tiên):');
        projectResult.assignment.slice(0, 10).forEach(assignment => {
          console.log(`- Công việc: ${assignment.task.name}`);
          console.log(`  Thời gian: ${new Date(assignment.task.startTime).toLocaleDateString()} - ${new Date(assignment.task.endTime).toLocaleDateString()}`);
          console.log(`  Nhân viên: ${assignment.assignee.name}`);
          if (assignment.assets && assignment.assets.length > 0) {
            console.log(`  Tài sản: ${assignment.assets.map(a => a.name).join(', ')}`);
          }
          console.log('');
        });
        
        // Tóm tắt phân bổ theo nhân viên
        console.log('Tóm tắt phân bổ theo nhân viên:');
        const assignmentByEmployee = {};
        
        projectResult.assignment.forEach(assignment => {
          const employeeId = assignment.assignee.id;
          if (!assignmentByEmployee[employeeId]) {
            assignmentByEmployee[employeeId] = {
              name: assignment.assignee.name,
              taskCount: 0,
              totalDuration: 0
            };
          }
          
          assignmentByEmployee[employeeId].taskCount++;
          const duration = (new Date(assignment.task.endTime) - new Date(assignment.task.startTime)) / (1000 * 60 * 60 * 24); // Số ngày
          assignmentByEmployee[employeeId].totalDuration += duration;
        });
        
        Object.values(assignmentByEmployee).forEach(empSummary => {
          console.log(`- ${empSummary.name}: ${empSummary.taskCount} công việc, khoảng ${Math.round(empSummary.totalDuration * 10) / 10} ngày làm việc`);
        });
        
        // Hiển thị KPI
        if (projectResult.kpis) {
          console.log('\nKPI phân bổ:');
          for (const empId in projectResult.kpis) {
            const employee = project.employees.find(e => e.id.toString() === empId);
            if (employee) {
              const kpi = projectResult.kpis[empId];
              console.log(`- ${employee.name}: ${JSON.stringify(kpi)}`);
            }
          }
        }
      } else {
        console.log(`Không thể phân bổ: ${projectResult.message}`);
      }
    }
    
    console.log('\n----- Trạng thái nguồn lực toàn cục -----');
    console.log(`Số nhân viên: ${result.globalResourceState.employees.length}`);
    if (result.globalResourceState.assets) {
      console.log(`Số tài sản đang sử dụng: ${result.globalResourceState.assets.inUse.length}`);
      console.log(`Số tài sản sẵn sàng sử dụng: ${result.globalResourceState.assets.readyToUse.length}`);
    }
    
    // Đánh giá hiệu quả phân bổ
    evaluateAllocation(result, projectsToAllocate);
    
  } catch (error) {
    console.error('Lỗi khi thực hiện phân bổ nguồn lực:', error);
    console.error(error.stack);
  }
}

// Hàm đánh giá hiệu quả phân bổ
function evaluateAllocation(result, originalProjects) {
  console.log('\n========== ĐÁNH GIÁ HIỆU QUẢ PHÂN BỔ ==========');
  
  let totalAssignments = 0;
  let employeeUtilization = {};
  let workloadBalance = [];
  
  // Khởi tạo thống kê cho tất cả nhân viên
  for (const project of originalProjects) {
    for (const employee of project.employees) {
      if (!employeeUtilization[employee.id]) {
        employeeUtilization[employee.id] = {
          name: employee.name,
          totalHours: 0,
          assignmentCount: 0
        };
      }
    }
  }
  
  // Tính tổng thời gian làm việc của mỗi nhân viên
  for (const projectId in result.projectResults) {
    const projectResult = result.projectResults[projectId];
    
    if (projectResult.success) {
      totalAssignments += projectResult.assignment.length;
      
      for (const assignment of projectResult.assignment) {
        const employeeId = assignment.assignee.id;
        const taskDuration = (new Date(assignment.task.endTime) - new Date(assignment.task.startTime)) / (1000 * 60 * 60); // Giờ
        
        if (employeeUtilization[employeeId]) {
          employeeUtilization[employeeId].totalHours += taskDuration;
          employeeUtilization[employeeId].assignmentCount++;
        }
      }
    }
  }
  
  // Tính số giờ trung bình và cân bằng tải
  let totalHours = 0;
  let activeEmployees = 0;
  
  for (const empId in employeeUtilization) {
    if (employeeUtilization[empId].assignmentCount > 0) {
      totalHours += employeeUtilization[empId].totalHours;
      activeEmployees++;
      workloadBalance.push(employeeUtilization[empId].totalHours);
    }
  }
  
  const averageHours = activeEmployees > 0 ? totalHours / activeEmployees : 0;
  
  // Tính độ lệch chuẩn của tải
  let varianceSum = 0;
  for (const hours of workloadBalance) {
    varianceSum += Math.pow(hours - averageHours, 2);
  }
  const standardDeviation = Math.sqrt(varianceSum / workloadBalance.length);
  const workloadBalanceRatio = averageHours > 0 ? standardDeviation / averageHours : 0;
  
  console.log(`Tổng số công việc đã phân bổ: ${totalAssignments}`);
  console.log(`Số nhân viên tham gia: ${activeEmployees}/${Object.keys(employeeUtilization).length}`);
  console.log(`Số giờ làm việc trung bình mỗi nhân viên: ${Math.round(averageHours * 10) / 10} giờ`);
  console.log(`Chỉ số cân bằng tải (thấp hơn là tốt hơn): ${Math.round(workloadBalanceRatio * 100) / 100}`);
  
  // Chi tiết phân bổ theo nhân viên (sắp xếp theo số giờ làm việc)
  console.log('\nChi tiết phân bổ theo nhân viên (sắp xếp theo tải):');
  
  const sortedEmployees = Object.values(employeeUtilization)
    .filter(emp => emp.assignmentCount > 0)
    .sort((a, b) => b.totalHours - a.totalHours);
  
  sortedEmployees.forEach(emp => {
    console.log(`- ${emp.name}: ${emp.assignmentCount} công việc, ${Math.round(emp.totalHours * 10) / 10} giờ (${Math.round(emp.totalHours / 8 * 10) / 10} ngày)`);
  });
}

// Chạy test
runTest();