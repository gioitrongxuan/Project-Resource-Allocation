// dlhs_core.js - Thuật toán DLHS cốt lõi cho phân bổ nguồn lực

function initHarmonyMemory(project, HMS, allTasksInPast, allTasksOutOfProject) {
  const harmonyMemory = [];
  for (let i = 0; i < HMS; i++) {
    const assignment = project.tasks.map(task => {
      const assignee = task.availableAssignee?.length
        ?  project.employees.find(emp => emp.id === task.availableAssignee[Math.floor(Math.random() * task.availableAssignee.length)])
        : null;

      const durationInHours = assignee ? calculateWorkingHours(task.startTime, task.endTime) : 0;

      const cost = assignee?.costPerHour
        ? durationInHours * assignee.costPerHour
        : 0;

      return {
        task,
        assignee,
        assets: [],
        kpi: randomKPI(),
        cost
      };
    });
    harmonyMemory.push({ assignment });
  }
  return harmonyMemory;
}

function randomKPI() {
  return {
    A: Math.random() * 0.5,
    B: Math.random() * 0.3,
    C: Math.random() * 0.2
  };
}

function improveMemory(harmonyMemory, project, allTasksInPast, allTasksOutOfProject, args, assetHasKPIWeight) {
  const maxGen = 50;
  for (let gen = 0; gen < maxGen; gen++) {
    const newAssignment = project.tasks.map(task => {
      const candidateAssignees = task.availableAssignee || [];
      const assignee = candidateAssignees.length
        ? candidateAssignees[Math.floor(Math.random() * candidateAssignees.length)]
        : null;

      const durationInHours = assignee ? calculateWorkingHours(task.startTime, task.endTime) : 0;

      const cost = assignee?.costPerHour
        ? durationInHours * assignee.costPerHour
        : 0;

      return {
        task,
        assignee,
        assets: [],
        kpi: randomKPI(),
        cost
      };
    });

    const newScore = scoreAssignment(newAssignment);
    const worstIndex = harmonyMemory.reduce((worstIdx, sol, idx, arr) =>
      scoreAssignment(sol.assignment) < scoreAssignment(arr[worstIdx].assignment) ? idx : worstIdx, 0
    );

    if (newScore > scoreAssignment(harmonyMemory[worstIndex].assignment)) {
      harmonyMemory[worstIndex] = { assignment: newAssignment };
    }
  }
  return { harmonyMemory };
}

function calculateWorkingHours(start, end) {
  const msPerDay = 24 * 60 * 60 * 1000;
  const msStart = new Date(start).getTime();
  const msEnd = new Date(end).getTime();
  const diffInMs = msEnd - msStart;

  const fullDays = Math.floor(diffInMs / msPerDay);
  const remainingMs = diffInMs % msPerDay;
  const hoursInPartialDay = remainingMs / (1000 * 60 * 60);

  return fullDays * 8 + hoursInPartialDay;
}

function scoreAssignment(assignment) {
  return assignment.reduce((sum, a) => sum + Object.values(a.kpi || {}).reduce((s, v) => s + v, 0), 0);
}

function getBestSolution(harmonyMemory) {
  return harmonyMemory.reduce((best, current) =>
    scoreAssignment(current.assignment) > scoreAssignment(best.assignment) ? current : best
  );
}

function getTotalKpi(assignment) {
  const result = { A: 0, B: 0, C: 0 };
  for (const a of assignment) {
    if (a.kpi) {
      for (const k in a.kpi) {
        result[k] += a.kpi[k];
      }
    }
  }
  return result;
}

function getKpiOfEmployees(assignment) {
  const result = {};
  for (const a of assignment) {
    const empId = a.assignee?.id;
    if (!empId) continue;
    if (!result[empId]) result[empId] = { A: 0, B: 0, C: 0 };
    if (a.kpi) {
      for (const k in a.kpi) {
        result[empId][k] += a.kpi[k];
      }
    }
  }
  return result;
}

function getDistanceOfKPIEmployeesTarget(kpiOfEmployees, kpiTargetOfEmployees) {
  let total = 0;
  for (const empId in kpiTargetOfEmployees) {
    const target = kpiTargetOfEmployees[empId];
    const actual = kpiOfEmployees[empId] || { A: 0, B: 0, C: 0 };
    for (const k in target) {
      const diff = (target[k] || 0) - (actual[k] || 0);
      total += diff * diff;
    }
  }
  return Math.sqrt(total);
}

module.exports = {
  initHarmonyMemory,
  improveMemory,
  getBestSolution,
  getDistanceOfKPIEmployeesTarget,
  getKpiOfEmployees,
  getTotalKpi
};
