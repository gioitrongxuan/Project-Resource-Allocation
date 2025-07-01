// main_multi_dlhs.js
const fs = require('fs');
const ExcelJS = require('exceljs');
const { projects } = require('../data/input/projects');
const { allTasksOutOfProject } = require('./data/taskOutofProject');
const { allTasksInPast } = require('./data/taskInPast');
const { proposalForProjectWithDLHS, getTimeForProject } = require('./hs_helper');
// const { employees } = require('./data/employee');
// const { assets } = require('./data/asset');

const assetHasKPIWeight = 0.1;
const DLHS_Arguments = {
  HMS: 60,
  BW_max: 2,
  BW_min: 1,
  PSLSize: 5,
  numOfSub: 4,
  R: 100,
  Max_FEs: 10
};

const defaultKPITarget = {
  A: { value: 0.88, weight: 1 },
  B: { value: 0, weight: 0 },
  C: { value: 0, weight: 0 }
};

async function runMultiDLHS() {
  const workbook = new ExcelJS.Workbook();

  for (const project of projects) {
    console.log(`\n=== Chạy phân bổ cho project: ${project.projectKey} ===`);
    const projectStart = new Date(project.startTime);
    const projectEnd = new Date(project.endTime);

    const projectWithKPI = {
      ...project,
      startTime: projectStart,
      endTime: projectEnd,
      kpiTarget: defaultKPITarget
    };

    const result = proposalForProjectWithDLHS(
      projectWithKPI,
      allTasksInPast,
      allTasksOutOfProject,
      DLHS_Arguments,
      assetHasKPIWeight
    );


    const sheet = workbook.addWorksheet(project.projectKey);
    sheet.addRow(['Task ID (Name)', 'Start Time', 'End Time', 'Assignee', 'Assets']);
    for (const { task, assignee, assets } of result.assignment) {
      const assetStr = assets.map(a => `${a.id} (${a.name})`).join(', ');
      sheet.addRow([
        `${task.id} (${task.name})`,
        task.startTime.toLocaleString(),
        task.endTime.toLocaleString(),
        `${assignee.id} (${assignee.name})`,
        assetStr
      ]);
    }

    sheet.addRow([]);
    sheet.addRow(['KPI Target', 'Result', 'Total Cost', 'Total Time', 'Distance', 'Start', 'End']);
    const kpi = result.kpiAssignment;
    const time = getTimeForProject(result.assignment);
    sheet.addRow([
      `${defaultKPITarget.A.value}`,
      `${kpi.A.toFixed(3)}`,
      result.totalCost,
      time.totalTime,
      result.distanceWithKPIEmployeesTarget,
      time.startTime.toLocaleString(),
      time.endTime.toLocaleString()
    ]);
  }

  await workbook.xlsx.writeFile('Ket_qua_phan_bo_multi_project.xlsx');
  console.log('\n Đã ghi file Excel Ket_qua_phan_bo_multi_project.xlsx');
}

runMultiDLHS();
