// input.js - đầu vào cho nhiều project đồng thời
const { projects } = require('../../../data/input/projects')

const { findEmployeesWithQualities } = require('../hs_helper')
// step1
const {preprocessProjects} = require('./preprocessing')
// step2 
const { getAvailableResourcesForTasks,logProjectKPI, logKPIByEmployee } = require('./helper')
//
const {scheduleTasksDynamically} = require('./scheduling_helper'); // nếu bạn muốn tách file riêng

//
const { logCostByProject } = require('./cost_helper');
const { prepareDLHSInputs } = require('./prepareDLHSInputs');

const { initHarmonyMemory } = require('./initHarmonyMemory');

const { runDLHS } = require('./runDLHS');



const assetHasKPIWeight = 0.1;
const DLHS_Arguments = {
  HMS: 60,
  BW_max: 2,
  BW_min: 1,
  PSLSize: 5,
  numOfSub: 4,
  R: 100,
  Max_FEs: 20000
};

const HS_Arguments = {
  HMS: 50,
  HMCR: 0.95,
  PAR: 0.3,
  bw: 0.02,
  Max_FEs: 20000
};

for (const project of projects) {
  const kpiTarget = {
    'A': { value: 0.6, weight: 1 },
  }
  project.kpiTarget = kpiTarget;
}
function getAvailableEmployeesForTasks(tasks, employees, lastKPIs = []) {
  return tasks.map((task) => {
    const availableAsset = [];
    const availableAssignee = findEmployeesWithQualities(employees, task.requireAssign);
    const taskId = task.id;
    const availableWithCheckInPast = availableAssignee.filter((assignee) => {
      const lastKPIOfAssignee = lastKPIs.find((item) => item.id === assignee.id);
      return lastKPIOfAssignee?.kpiInTask?.[taskId] !== -1;
    });

    return {
      ...task,
      availableAssignee: availableWithCheckInPast.length > 0 ? availableWithCheckInPast : availableAssignee,
      availableAsset
    };
  });
}

let allTasks = []
let allEmployeesMap = new Map()
let allAssetsMap = new Map()
let projectInfoMap = new Map()

for (const project of projects) {
  const projectStart = new Date(project.startTime);
  const projectEnd = new Date(project.endTime);

  const enrichedTasks = getAvailableEmployeesForTasks(project.tasks, project.employees, [])
  enrichedTasks.forEach(t => {
    t.projectKey = project.projectKey;
    t.projectStartTime = projectStart;
    t.projectEndTime = projectEnd;
  });
  allTasks.push(...enrichedTasks);
  project.employees.forEach(e => allEmployeesMap.set(e.id, e));
  if (project.assets && Array.isArray(project.assets)) {
    project.assets.forEach(a => allAssetsMap.set(a.id, a));
  }
  projectInfoMap.set(project.projectKey, {
    kpiTarget: project.kpiTarget,
    startTime: projectStart,
    endTime: projectEnd
  });
}

const mergedProject = {
  tasks: allTasks,
  employees: Array.from(allEmployeesMap.values()),
  assets: Array.from(allAssetsMap.values()),
  isMultiProject: true,
  kpiTarget: {},
  projectInfoMap
};

module.exports = {
  project: mergedProject,
  assetHasKPIWeight,
  DLHS_Arguments,
  HS_Arguments,
};
// Step 1: Tiền xử lý - thực hiện Topological Sort và tính thời lượng đường găng
const result = preprocessProjects(projects);

// Tạo topoOrderMap từ kết quả step 1
const topoOrderMap = {};
for (const item of result) {
  topoOrderMap[item.projectId] = item.sortedTasks;
}

// Step 2: Gán availableAssignee và availableAsset cho từng task
for (const project of projects) {
  for (const emp of project.employees) {
    emp.kpi = {
      A: +(Math.random() * 0.4 + 0.6).toFixed(2), // Từ 0.6 đến 1.0
      B: +(Math.random() * 0.4 + 0.6).toFixed(2),
      C: +(Math.random() * 0.4 + 0.6).toFixed(2)
    };
  }
  const sortedTaskIds = topoOrderMap[project.projectKey];
  const taskMap = Object.fromEntries(project.tasks.map(t => [t.id, t]));

  // Lấy tasks theo đúng thứ tự topo
  const orderedTasks = sortedTaskIds.map(id => taskMap[id]).filter(Boolean);

  // Gán lại danh sách task đã được tính availableAssignee/Asset
  const updatedTasks = getAvailableResourcesForTasks(orderedTasks, project.employees, project.assets);
  
  
  // Gắn lại vào project (theo thứ tự topo đã xử lý)
  project.tasks = updatedTasks;
}


// Step 3: Gán thời gian + nhân viên theo lịch động
const scheduledProjects = scheduleTasksDynamically(projects, topoOrderMap);

// Ghi log kết quả phân bổ
for (const project of scheduledProjects) {
  logProjectKPI(project);          // KPI tổng cho project
  logKPIByEmployee(project);       // KPI theo nhân viên
  logCostByProject(project); 
}


const {
  tasks: dlhsTasks,
  employees: dlhsEmployees,
  assets: dlhsAssets,
  kpiTargetByProject,
  kpiOfEmployeesTarget
} = prepareDLHSInputs(scheduledProjects);

console.log('[✔] Đã chuẩn bị đầu vào cho DLHS');

const harmonyMemory = initHarmonyMemory(
  dlhsTasks,
  dlhsEmployees,
  DLHS_Arguments.HMS,
  kpiTargetByProject,
  kpiOfEmployeesTarget
);


const result2 = runDLHS(
  harmonyMemory,
  dlhsTasks,
  dlhsEmployees,
  DLHS_Arguments,
  kpiTargetByProject,
  kpiOfEmployeesTarget
);

console.log("🎯 Best score:", result2.bestSolution.score);