// main_hs.js - chạy HS cho nhiều project đồng thời
const ExcelJS = require('exceljs');
const { allTasksOutOfProject } = require('./data/taskOutofProject');
const { allTasksInPast } = require('./data/taskInPast');
const { proposalForProjectWithHS_Base } = require('./hs_helper');
const { project, assetHasKPIWeight, HS_Arguments } = require('./input');

async function run() {
  const start = performance.now();
  const result = proposalForProjectWithHS_Base(
    project,
    allTasksInPast,
    allTasksOutOfProject,
    HS_Arguments,
    assetHasKPIWeight
  );
  const end = performance.now();
  const duration = ((end - start) / 1000).toFixed(2);

  const workbook = new ExcelJS.Workbook();
  const argSheet = workbook.addWorksheet('HS_Params');
  argSheet.addRow(['Tham số thuật toán HS']);
  argSheet.addRow(['Key', 'Value']);
  Object.entries(HS_Arguments).forEach(([k, v]) => argSheet.addRow([k, v]));

  for (const [key, info] of project.projectInfoMap.entries()) {
    const sheet = workbook.addWorksheet(key);
    const taskInProject = result.assignment.filter(a => a.task.projectKey === key);

    sheet.addRow(['Task ID (Name)', 'Start', 'End', 'Assignee', 'Assets']);
    for (const { task, assignee, assets } of taskInProject) {
      sheet.addRow([
        `${task.id} (${task.name})`,
        task.startTime.toLocaleString(),
        task.endTime.toLocaleString(),
        `${assignee.id} (${assignee.name})`,
        assets.map(a => `${a.id} (${a.name})`).join(', ')
      ]);
    }

    const kpiTarget = info.kpiTarget;
    const kpiResult = result.kpiAssignmentByProject?.[key] || {};
    const totalCost = taskInProject.reduce((sum, t) => sum + (t.cost || 0), 0);
    const startTime = taskInProject.length ? new Date(Math.min(...taskInProject.map(t => new Date(t.task.startTime)))) : '';
    const endTime = taskInProject.length ? new Date(Math.max(...taskInProject.map(t => new Date(t.task.endTime)))) : '';

    sheet.addRow([]);
    sheet.addRow(['Target A', 'Result A', 'Target B', 'Result B', 'Target C', 'Result C']);
    sheet.addRow([
      kpiTarget.A?.value || 0, kpiResult.A?.toFixed(3) || 0,
      kpiTarget.B?.value || 0, kpiResult.B?.toFixed(3) || 0,
      kpiTarget.C?.value || 0, kpiResult.C?.toFixed(3) || 0
    ]);

    sheet.addRow(['Start', 'End', 'Total Cost', 'Duration (s)']);
    sheet.addRow([
      startTime.toLocaleString(),
      endTime.toLocaleString(),
      totalCost,
      duration
    ]);

    sheet.addRow([]);
    sheet.addRow(['KPI phân bổ theo nhân sự']);
    const empKPI = result.kpiOfEmployeesByProject?.[key] || {};
    const header = ['Emp Name', 'Emp ID', 'A', 'B', 'C'];
    sheet.addRow(header);
    for (const empId in empKPI) {
      const emp = project.employees.find(e => e.id == empId);
      const kpi = empKPI[empId];
      sheet.addRow([emp?.name || '', empId, kpi.A || 0, kpi.B || 0, kpi.C || 0]);
    }
  }

  await workbook.xlsx.writeFile('./output/Ket_qua_HS_Da_Project.xlsx');
  console.log('✅ File Excel đã tạo: ./output/Ket_qua_HS_Da_Project.xlsx');
}

run();
