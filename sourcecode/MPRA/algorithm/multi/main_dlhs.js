// main_dlhs.js - chạy DLHS cho nhiều project đồng thời
const fs = require('fs');
const ExcelJS = require('exceljs');
const { allTasksOutOfProject } = require('../data/taskOutofProject');
const { allTasksInPast } = require('../data/taskInPast');
const { proposalForProjectWithDLHS } = require('./hs_helper');
const { project, assetHasKPIWeight, DLHS_Arguments } = require('./input');

async function testDLHS() {
  const start = performance.now();
  const result = proposalForProjectWithDLHS(
    project,
    allTasksInPast,
    allTasksOutOfProject,
    DLHS_Arguments,
    assetHasKPIWeight
  );
  const end = performance.now();
  const performanceTime = (end - start) / 1000;

  console.log("✅ Phân bổ hoàn tất. Time:", performanceTime, "(s)");
  console.log("result:", result);
  // console.log("Task phân bổ:", result.assignment);

  const workbook = new ExcelJS.Workbook();
  const argSheet = workbook.addWorksheet('DLHS_Params');
  argSheet.addRow(['Tham số thuật toán DLHS']);
  argSheet.addRow(['Key', 'Value']);
  Object.entries(DLHS_Arguments).forEach(([k, v]) => argSheet.addRow([k, v]));

  const infoMap = project.projectInfoMap;
  for (const [key, info] of infoMap.entries()) {
    const sheet = workbook.addWorksheet(key);
    const taskInProject = result.assignment.filter(a => a.task.projectKey === key);
    sheet.addRow(['Task ID (Name)', 'Start', 'End', 'Assignee', 'Assets', 'Cost']);
    for (const { task, assignee, assets, cost } of taskInProject) {
      sheet.addRow([
        `${task.id} (${task.name})`,
        task.startTime.toLocaleString(),
        task.endTime.toLocaleString(),
        assignee ? `${assignee.id} (${assignee.name})` : 'Unassigned',
        assets.map(a => `${a.id} (${a.name})`).join(', '),
        cost || 0
      ]);
    }

    const kpiTarget = info.kpiTarget;
    const kpiResult = result.kpiAssignmentByProject?.[key] || { A: 0, B: 0, C: 0 };
    const totalCost = taskInProject.reduce((sum, t) => sum + (t.cost || 0), 0);
    const startTime = taskInProject.length ? new Date(Math.min(...taskInProject.map(t => new Date(t.task.startTime)))) : '';
    const endTime = taskInProject.length ? new Date(Math.max(...taskInProject.map(t => new Date(t.task.endTime)))) : '';

    sheet.addRow([]);
    sheet.addRow(['Target A', 'Result A', 'Achieved A (%)', 'Target B', 'Result B', 'Achieved B (%)', 'Target C', 'Result C', 'Achieved C (%)']);
    sheet.addRow([
      kpiTarget?.A?.value || 0, kpiResult?.A?.toFixed(3) || 0, kpiTarget?.A?.value ? ((kpiResult?.A / kpiTarget.A.value) * 100).toFixed(2) : 0,
      kpiTarget?.B?.value || 0, kpiResult?.B?.toFixed(3) || 0, kpiTarget?.B?.value ? ((kpiResult?.B / kpiTarget.B.value) * 100).toFixed(2) : 0,
      kpiTarget?.C?.value || 0, kpiResult?.C?.toFixed(3) || 0, kpiTarget?.C?.value ? ((kpiResult?.C / kpiTarget.C.value) * 100).toFixed(2) : 0
    ]);

    sheet.addRow(['Start', 'End', 'Total Cost', 'Time (s)']);
    sheet.addRow([
      startTime.toLocaleString(),
      endTime.toLocaleString(),
      totalCost,
      performanceTime.toFixed(2)
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

const outputDir = './output';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}
const outputPath = `${outputDir}/Ket_qua_DLHS_Da_Project.xlsx`;
await workbook.xlsx.writeFile(outputPath);
console.log(`📁 File Excel đã tạo: ${outputPath}`);
}

testDLHS();
