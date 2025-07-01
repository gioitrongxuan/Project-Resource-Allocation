const { KPI_TYPES, KPI_CANNOT_WORK, KPI_NOT_VALUE } = require("../constants/kpi.const")
const { groupBy } = require("./helper")

function splitKPIToEmployeesByKMeans(tasks, employees, kpiTarget, assetHasKPIWeight) {
  const employeesClone = JSON.parse(JSON.stringify(employees))
  const assigneeScoreMap = new Map()
  const totalKPI = { A: 0, B: 0, C: 0 }

  for (const task of tasks) {
    const weightAsset = task.assets?.length > 0 ? assetHasKPIWeight : 0
    const weightEmployee = 1 - weightAsset

    for (const emp of task.availableAssignee || []) {
      const empData = employeesClone.find(e => e.id === emp.id)
      if (!empData) continue

      if (!assigneeScoreMap.has(emp.id)) assigneeScoreMap.set(emp.id, { A: 0, B: 0, C: 0 })

      for (const kpiType of KPI_TYPES) {
        const empKpi = empData.kpi?.[kpiType] ?? KPI_NOT_VALUE
        const score = (task.kpiWeight?.[kpiType] || 0) * empKpi * weightEmployee
        assigneeScoreMap.get(emp.id)[kpiType] += score
        totalKPI[kpiType] += score
      }
    }
  }

  const result = {}
  for (const [empId, score] of assigneeScoreMap.entries()) {
    result[empId] = {}
    for (const kpiType of KPI_TYPES) {
      const proportion = totalKPI[kpiType] > 0 ? score[kpiType] / totalKPI[kpiType] : 0
      result[empId][kpiType] = (kpiTarget[kpiType]?.value || 0) * proportion
    }
  }

  return result
}

function splitKPIToEmployeesByProject(project, assetHasKPIWeight) {
  const result = {} // { projectKey: { empId: { A, B, C } } }

  for (const [projectKey, info] of project.projectInfoMap.entries()) {
    const taskInProject = project.tasks.filter(t => t.projectKey === projectKey)
    const employeeInProject = project.employees.filter(e => {
      return taskInProject.some(t => t.availableAssignee?.find(a => a.id === e.id))
    });
    const perEmp = splitKPIToEmployeesByKMeans(
      taskInProject,
      employeeInProject,
      info.kpiTarget,
      assetHasKPIWeight
    );
    result[projectKey] = perEmp
  }
  return result
}

function findBestMiniKPIOfTasks(tasks, assetHasKPIWeight) {
  const kpiMap = {}
  for (const task of tasks) {
    const weightAsset = task.assets?.length > 0 ? assetHasKPIWeight : 0
    const weightEmployee = 1 - weightAsset
    kpiMap[task.id] = {}
    for (const kpiType of KPI_TYPES) {
      let best = 0
      for (const assignee of task.availableAssignee || []) {
        best = Math.max(best, (assignee.kpi?.[kpiType] || 0))
      }
      kpiMap[task.id][kpiType] = (task.kpiWeight?.[kpiType] || 0) * best * weightEmployee
    }
  }
  return kpiMap
}

function reSplitKPIOfEmployees(tasks, kpiTarget, assetHasKPIWeight) {
  return splitKPIToEmployeesByKMeans(tasks, tasks.flatMap(t => t.availableAssignee), kpiTarget, assetHasKPIWeight)
}

module.exports = {
  splitKPIToEmployeesByKMeans,
  splitKPIToEmployeesByProject,
  findBestMiniKPIOfTasks,
  reSplitKPIOfEmployees
};
