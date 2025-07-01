// input.js - đầu vào cho nhiều project đồng thời
const { projects } = require('../../data/input/projects')

const { findEmployeesWithQualities } = require('./hs_helper')

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
