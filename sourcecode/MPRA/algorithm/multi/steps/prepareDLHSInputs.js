const { getTotalKPIByProject, splitKPIToEmployeesByProject } = require('./helper');

function prepareDLHSInputs(projects) {
  let allTasks = [];
  const employeeMap = new Map(); // Tránh trùng nhân viên

  const kpiTargetByProject = {};   // { projectKey: { A: ..., B: ... } }

  for (const project of projects) {
    allTasks.push(...project.tasks);

    for (const emp of project.employees) {
      if (!employeeMap.has(emp.id)) {
        employeeMap.set(emp.id, emp);
      }
    }

    kpiTargetByProject[project.projectKey] = project.kpiTarget || {};
  }

  // Chia KPI xuống từng nhân viên theo từng project
  const kpiOfEmployeesTarget = splitKPIToEmployeesByProject(projects);

  return {
    tasks: allTasks,
    employees: Array.from(employeeMap.values()),
    assets: [], // có thể cập nhật nếu có tài sản
    kpiTargetByProject,
    kpiOfEmployeesTarget
  };
}

module.exports = {
  prepareDLHSInputs
};
