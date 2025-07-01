// main_multi_dlhs.js - Phân bổ đồng thời nhiều project dùng DLHS
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
  Max_FEs: 200
};

async function runMultiDLHS() {
  // Gộp toàn bộ task, employee, asset
  let allTasks = []
  let allEmployeesMap = new Map()
  let allAssetsMap = new Map()
  let projectInfoMap = new Map()

  for (const project of projects) {
    const projectStart = new Date(project.startTime);
    const projectEnd = new Date(project.endTime);
    project.tasks.forEach(t => {
      t.projectKey = project.projectKey;
      t.projectStartTime = projectStart;
      t.projectEndTime = projectEnd;
    });
    allTasks.push(...project.tasks);
    if (project.employees && Array.isArray(project.employees)) {
      project.employees.forEach(e => allEmployeesMap.set(e.id, e));
    }
    if (project.assets && Array.isArray(project.assets)) {
      project.assets.forEach(a => allAssetsMap.set(a.id, a));
    }
    projectInfoMap.set(project.projectKey, {
      kpiTarget: project.kpiTarget,
      startTime: projectStart,
      endTime: projectEnd
    });
    }

    const mergedEmployees = Array.from(allEmployeesMap.values());
    const mergedAssets = Array.from(allAssetsMap.values());

    const mergedProjectStartTime = new Date(Math.min(...projects.map(p => new Date(p.startTime).getTime())));
    const mergedProjectEndTime = new Date(Math.max(...projects.map(p => new Date(p.endTime).getTime())));

    const mergedProject = {
    tasks: allTasks,
    employees: mergedEmployees,
    assets: mergedAssets,
    kpiTarget: {}, // để tính theo từng project trong thuật toán
    startTime: mergedProjectStartTime,
    endTime: mergedProjectEndTime,
    isMultiProject: true,
    projectInfoMap
    };

  console.log("\n🔄 Đang chạy phân bổ DLHS cho tất cả project đồng thời...");
  const start = performance.now();
  const result = proposalForProjectWithDLHS(
    mergedProject,
    allTasksInPast,
    allTasksOutOfProject,
    DLHS_Arguments,
    assetHasKPIWeight
  );
  const end = performance.now();
  const duration = ((end - start) / 1000).toFixed(2);
  console.log(`\n✅ Phân bổ hoàn tất sau ${duration} giây.`);

  const workbook = new ExcelJS.Workbook();
  const argumentsSheet = workbook.addWorksheet('ThamSoDLHS');
  const projectGeneralSheet = workbook.addWorksheet('TongQuan');

  argumentsSheet.addRow(['Tham số DLHS']);
  argumentsSheet.addRow(['Key', 'Value']);
  for (const key in DLHS_Arguments) {
    argumentsSheet.addRow([key, DLHS_Arguments[key]]);
  }

  projectGeneralSheet.addRow(['ProjectKey', 'Target A', 'Target B', 'Target C']);
  for (const [key, info] of projectInfoMap.entries()) {
    const { kpiTarget } = info;
    projectGeneralSheet.addRow([key, kpiTarget.A?.value || 0, kpiTarget.B?.value || 0, kpiTarget.C?.value || 0]);
  }

  // Tách kết quả theo từng project
  for (const [key, info] of projectInfoMap.entries()) {
    const taskSheet = workbook.addWorksheet(key);
    taskSheet.addRow(['Task ID (Task Name)', 'Start', 'End', 'Assignee (ID/Name)', 'Assets']);

    const taskInProject = result.assignment.filter(a => a.task.projectKey === key);
    for (const { task, assignee, assets } of taskInProject) {
      const assetStr = assets.map(a => `${a.id} (${a.name})`).join(', ');
      taskSheet.addRow([
        `${task.id} (${task.name})`,
        task.startTime.toLocaleString(),
        task.endTime.toLocaleString(),
        `${assignee.id} (${assignee.name})`,
        assetStr
      ]);
    }

    const kpiAchieved = result.kpiAssignmentByProject?.[key] || {};
    const timeInfo = getTimeForProject(taskInProject);
    const totalCost = taskInProject.reduce((sum, t) => sum + (t.cost || 0), 0);

    taskSheet.addRow([]);
    taskSheet.addRow(['Target A', 'Result A', 'Target B', 'Result B', 'Target C', 'Result C']);
    taskSheet.addRow([
      info.kpiTarget.A?.value || 0,
      kpiAchieved.A?.toFixed(3) || 0,
      info.kpiTarget.B?.value || 0,
      kpiAchieved.B?.toFixed(3) || 0,
      info.kpiTarget.C?.value || 0,
      kpiAchieved.C?.toFixed(3) || 0
    ]);

    taskSheet.addRow(['Start', 'End', 'Total Time', 'Total Cost', 'Performance (s)']);
    taskSheet.addRow([
      timeInfo.startTime.toLocaleString(),
      timeInfo.endTime.toLocaleString(),
      timeInfo.totalTime,
      totalCost,
      duration
    ]);
  }

  await workbook.xlsx.writeFile('Ket_qua_DLHS_Dong_Thoi.xlsx');
  console.log('\n📁 File Excel "Ket_qua_DLHS_Dong_Thoi.xlsx" đã được tạo.');
}

runMultiDLHS();
