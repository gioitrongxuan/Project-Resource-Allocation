

// rcmp_to_projects.js
const fs = require('fs');
const path = require('path');

function parseRCMPtoProjects(rcmpText) {
  const lines = rcmpText.trim().split('\n').map(line => line.trim()).filter(l => l.length);
  let idx = 0;

  const numProjects = parseInt(lines[idx++]);
  const numResources = parseInt(lines[idx++]);
  const resourceAvailability = lines[idx++].split(/\s+/).map(Number);

  const projects = [];

  for (let p = 1; p <= numProjects; p++) {
    const [numActivities, releaseDate] = lines[idx++].split(/\s+/).map(Number);
    const resourceUsage = lines[idx++].split(/\s+/).map(Number);

    const tasks = [];
    for (let a = 1; a <= numActivities; a++) {
      const parts = lines[idx++].split(/\s+/);
      const duration = parseInt(parts[0]);
      const res = parts.slice(1, 1 + numResources).map(Number);
      const numSucc = parseInt(parts[1 + numResources]);
      const succ = parts.slice(2 + numResources, 2 + numResources + numSucc);

      tasks.push({
        id: `${p}:${a}`,
        code: `P${p}_T${a}`,
        name: `Task ${a}`,
        estimateTime: duration ,// quy đổi về ngày nếu cần
        requireAssign: Object.fromEntries(res.map((v, i) => [`res_${i + 1}`, v])),
        preceedingTasks: [],
        successors: succ,
        kpiInTask: [{ id: 1, type: 'A', weight: 1 }],
        projectKey: `Project_${p}`,
        startTime: null,
        endTime: null,
      });
    }

    // Gán preceedingTasks bằng cách duyệt ngược lại
    const taskMap = Object.fromEntries(tasks.map(t => [t.id, t]));
    tasks.forEach(t => {
      t.successors.forEach(succ => {
        if (taskMap[succ]) {
          taskMap[succ].preceedingTasks.push(t.id);
        }
      });
    });
    tasks.forEach(t => delete t.successors);

    projects.push({
      id: p,
      projectKey: `Project_${p}`,
      projectName: `Generated Project ${p}`,
      projectType: 'synthetic',
      projectLead: 'auto@generated.com',
      description: '',
      startTime: '2025-01-01T00:00:00.000Z',
      endTime: '2025-12-31T00:00:00.000Z',
      kpiTarget: { A: { value: 1, weight: 1 } },
      tasks,
      employees: [],
      assets: [],
    });
  }

  return projects;
}

function extractResourceStats(projects) {
  const resourceStats = {};
  for (const project of projects) {
    for (const task of project.tasks) {
      for (const [res, val] of Object.entries(task.requireAssign || {})) {
        if (!resourceStats[res]) resourceStats[res] = [];
        resourceStats[res].push(val);
      }
    }
  }
  const stats = {};
  for (const res in resourceStats) {
    const values = resourceStats[res];
    const avg = values.reduce((a, b) => a + b, 0) / values.length;
    stats[res] = { min: Math.min(...values), max: Math.max(...values), avg };
  }
  return stats;
}

function generateControlledEmployees(stats, numEmployees = 10) {
  const employees = [];
  for (let i = 0; i < numEmployees; i++) {
    const qualities = {};
    for (const res in stats) {
      const { avg } = stats[res];
      const val = avg * (0.7 + Math.random() * 0.4); // từ 70%–110% avg
      qualities[res] = +val.toFixed(2);
    }
    employees.push({
      id: i + 1,
      name: `emp_${i + 1}`,
      employeeNumber: `MS2024${String(i + 1).padStart(3, '0')}`,
      position: 'synthetic',
      costPerHour: +(5 + Math.random() * 5).toFixed(2),
      qualities
    });
  }
  return employees;
}

// MAIN USAGE:
const rcmpText = fs.readFileSync('../../data/test/MPLIB1/MPLIB 1 - Set 1/Instances/MPLIB1_Set1_0.rcmp', 'utf-8'); // đổi tên file ở đây
const projects = parseRCMPtoProjects(rcmpText);
const stats = extractResourceStats(projects);
const employees = generateControlledEmployees(stats, 15);
projects.forEach(p => p.employees = employees);

module.exports = {
    projects,
}