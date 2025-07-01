const fs = require('fs');
const path = require('path');
function logStepToFile(stepName, content) {
  const filePath = path.join(__dirname, `output/${stepName}.txt`);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`[✔] Đã ghi kết quả bước ${stepName} vào: ${filePath}`);
}






function groupAssignmentByProject(assignment) {
  const map = new Map();
  for (const a of assignment) {
    const key = a.task.projectKey || 'unknown';
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(a);
  }
  return map;
}


function getAvailableResourcesForTasks(tasks, employees, assets) {
  const result = tasks.map(task => {
    const availableAssignee = employees.filter(emp => {
      if (!task.requireAssign) return true;
      return Object.entries(task.requireAssign).every(([skill, level]) => {
        return emp.qualities?.[skill] >= level;
      });
    });

    const availableAsset = Array.isArray(assets) ? assets.filter(asset => {
      if (!task.requireAsset) return true;
      return Object.entries(task.requireAsset).every(([cap, level]) => {
        return asset.capabilities?.[cap] >= level;
      });
    }) : [];

    return {
      ...task,
      availableAssignee,
      availableAsset
    };
  });

  // 👉 Tạo log
  const logContent = result.map(task => {
    return `- Task [#${task.id}] - Project ${task.projectKey || task.projectId}:\n` +
           `  + Nhân sự phù hợp: ${task.availableAssignee.map(a => a.id).join(', ') || 'Không có'}\n` +
           `  + Thiết bị khả dụng: ${task.availableAsset.map(a => a.id).join(', ') || 'Không có'}\n`;
  }).join('\n');

  logStepToFile('step2_available_resources', `[STEP 2 - Nhân sự & Thiết bị]\n\n${logContent}`);

  return result;
}     



function getKPIAchievedByProject(tasks) {
  const kpiTotal = {};

  for (const task of tasks) {
    if (!task.assignee || !task.kpiInTask || !Array.isArray(task.kpiInTask)) continue;

    for (const kpiEntry of task.kpiInTask) {
      const type = kpiEntry.type;
      const weight = kpiEntry.weight || 0;
      const score = task.assignee.kpi?.[type] || 0;

      if (!kpiTotal[type]) kpiTotal[type] = 0;
      kpiTotal[type] += weight * score;
    }
  }

  return kpiTotal;
}



function getKPIByEmployeeInProject(tasks) {
  const result = {}; // empId → { name, A: val, B: val, ... }

  for (const task of tasks) {
    const emp = task.assignee;
    const kpis = task.kpiInTask || [];

    if (!emp || !emp.id || !emp.kpi) continue;
    if (!result[emp.id]) result[emp.id] = { name: emp.name };

    for (const { type, weight } of kpis) {
      const score = (emp.kpi[type] || 0) * weight;
      result[emp.id][type] = (result[emp.id][type] || 0) + score;
    }
  }

  return result;
}
function logKPIByEmployee(project) {
  const empKPI = getKPIByEmployeeInProject(project.tasks);
  const projectId = project.projectKey || project.id || 'unknown';
  const lines = [`📈 KPI theo nhân viên – Project ${projectId}\n`];

  for (const empId in empKPI) {
    const emp = empKPI[empId];
    const kpiLine = Object.entries(emp)
      .filter(([k]) => k !== 'name')
      .map(([k, v]) => `KPI ${k}: ${(v ?? 0).toFixed(2)}`)
      .join(', ');

    lines.push(`- ${emp.name} (ID: ${empId}) → ${kpiLine}`);
  }

  logStepToFile(`kpi_by_employee_${projectId}`, lines.join('\n'));
}

function logProjectKPI(project) {
  
  const actualKPI = getKPIAchievedByProject(project.tasks);
  const targetKPI = project.kpiTarget || {};
  const projectId = project.projectKey || project.id || 'unknown';

  let content = `📊 KPI đạt được của project ${projectId}\n\n`;

  for (const kpiType in targetKPI) {
    const expected = typeof targetKPI[kpiType] === 'object'
      ? targetKPI[kpiType].weight
      : targetKPI[kpiType];
    const achieved = actualKPI[kpiType]?.toFixed(2) || '0.00';
    content += `- KPI ${kpiType}: đạt ${achieved} / mục tiêu ${expected}\n`;
  }

  logStepToFile(`kpi_${projectId}`, content);
  console.log(project.kpiTarget);
}

function getTotalKPIByProject(assignment) {
  const result = {}; // { projectKey: { A: value, B: value, ... } }

  for (const item of assignment) {
    const { task, assignee } = item;
    if (!task || !assignee || !task.kpiInTask) continue;

    const projectKey = task.projectKey;
    if (!result[projectKey]) {
      result[projectKey] = {};
    }

    for (const kpi of task.kpiInTask) {
      const empKPI = assignee.kpi?.[kpi.type] || 0;
      const weighted = empKPI * kpi.weight;
      result[projectKey][kpi.type] = (result[projectKey][kpi.type] || 0) + weighted;
    }
  }

  return result;
}

function getKPIOfEmployeesByProject(assignment) {
  const result = {}; // { projectKey: { empId: { A: value, B: value } } }

  for (const item of assignment) {
    const { task, assignee } = item;
    if (!task || !assignee || !task.kpiInTask) continue;

    const projectKey = task.projectKey;
    const empId = assignee.id;

    if (!result[projectKey]) result[projectKey] = {};
    if (!result[projectKey][empId]) result[projectKey][empId] = {};

    for (const kpi of task.kpiInTask) {
      const empKPI = assignee.kpi?.[kpi.type] || 0;
      const weighted = empKPI * kpi.weight;
      result[projectKey][empId][kpi.type] = (result[projectKey][empId][kpi.type] || 0) + weighted;
    }
  }

  return result;
}

function getDistanceOfKPIEmployeesTarget(actual, target) {
  let distance = 0;
  for (const projectKey in target) {
    const empTargetMap = target[projectKey];
    const empActualMap = actual[projectKey] || {};

    for (const empId in empTargetMap) {
      const empTarget = empTargetMap[empId];
      const empActual = empActualMap[empId] || {};
      for (const kpiType in empTarget) {
        const diff = (empActual[kpiType] || 0) - empTarget[kpiType];
        distance += diff * diff; // dùng bình phương sai lệch
      }
    }
  }
  return +distance.toFixed(4);
}

function getCostOfAssignment(assignment) {
  let totalCost = 0;
  for (const item of assignment) {
    const { task, assignee } = item;
    if (!task || !assignee || !task.startTime || !task.endTime) continue;

    const start = new Date(task.startTime);
    const end = new Date(task.endTime);
    const durationHours = (end - start) / (1000 * 60 * 60);
    totalCost += (assignee.costPerHour || 0) * durationHours;
  }
  return +totalCost.toFixed(2);
}

function checkDuplicate(assignment) {
  const schedule = {}; // empId => array of { startTime, endTime }
  let count = 0;

  for (const item of assignment) {
    const { task, assignee } = item;
    if (!task || !assignee || !task.startTime || !task.endTime) continue;

    const empId = assignee.id;
    const start = new Date(task.startTime);
    const end = new Date(task.endTime);

    if (!schedule[empId]) schedule[empId] = [];
    for (const range of schedule[empId]) {
      if (!(end <= range.startTime || start >= range.endTime)) {
        count++;
        break;
      }
    }
    schedule[empId].push({ startTime: start, endTime: end });
  }

  return count;
}

function splitKPIToEmployeesByProject(projects) {
  const result = {}; // { projectKey: { empId: { A: value, B: value } } }

  for (const project of projects) {
    const { projectKey, tasks, employees, kpiTarget } = project;
    if (!tasks || !employees || !kpiTarget) continue;

    if (!result[projectKey]) result[projectKey] = {};

    const empCount = employees.length;

    for (const emp of employees) {
      if (!result[projectKey][emp.id]) result[projectKey][emp.id] = {};

      for (const kpiType in kpiTarget) {
        const perEmpKPI = (kpiTarget[kpiType] || 0) / empCount;
        result[projectKey][emp.id][kpiType] = perEmpKPI;
      }
    }
  }

  return result;
}

module.exports = {
    getAvailableResourcesForTasks,
    logProjectKPI,
    logKPIByEmployee,
    splitKPIToEmployeesByProject,
    getTotalKPIByProject,
    getKPIOfEmployeesByProject,
    getDistanceOfKPIEmployeesTarget,
  getCostOfAssignment,
  checkDuplicate,
    };


