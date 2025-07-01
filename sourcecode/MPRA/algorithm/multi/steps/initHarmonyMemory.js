const { getTotalKPIByProject, getKPIOfEmployeesByProject, getDistanceOfKPIEmployeesTarget, getCostOfAssignment, checkDuplicate } = require('./helper');
const { logStepToFile } = require('./log_helper');

function initHarmonyMemory(tasks, employees, HMS, kpiTargetByProject, kpiOfEmployeesTarget) {
  const harmonyMemory = [];

  for (let i = 0; i < HMS; i++) {
    const assignment = [];
    const empSchedule = {}; // để kiểm tra trùng lịch

    for (const task of tasks) {
      const available = task.availableAssignee || [];
      let assignedEmp = null;

      if (available.length > 0) {
        const idx = Math.floor(Math.random() * available.length);
        assignedEmp = available[idx];
      }

      assignment.push({
        task,
        assignee: assignedEmp,
        startTime: task.startTime, // đã có từ bước 3
        endTime: task.endTime,
      });

      if (assignedEmp) {
        if (!empSchedule[assignedEmp.id]) empSchedule[assignedEmp.id] = [];
        empSchedule[assignedEmp.id].push({ startTime: new Date(task.startTime), endTime: new Date(task.endTime) });
      }
    }

    // Tính toán các thông tin phụ cho đánh giá
    const kpiAssignment = getTotalKPIByProject(assignment);
    const kpiOfEmployees = getKPIOfEmployeesByProject(assignment);
    const distanceKPI = getDistanceOfKPIEmployeesTarget(kpiOfEmployees, kpiOfEmployeesTarget);
    const totalCost = getCostOfAssignment(assignment);
    const falseDuplicate = checkDuplicate(assignment);

    harmonyMemory.push({
      assignment,
      kpiAssignment,
      kpiOfEmployees,
      totalCost,
      falseDuplicate,
      distanceKPI
    });
  }

  // Ghi log
  const lines = harmonyMemory.map((h, idx) => {
    return `🎵 HM#${idx + 1}: Cost=${h.totalCost}, Distance=${h.distanceKPI}, Duplicate=${h.falseDuplicate}`;
  }).join('\n');

  logStepToFile('initial_harmony_memory', lines);
  console.log(`[✔] Đã khởi tạo ${HMS} harmony ban đầu.`);
  return harmonyMemory;
}

module.exports = {
  initHarmonyMemory
};
