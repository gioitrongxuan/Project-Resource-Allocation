const fs = require('fs');
const path = require('path');
const { logStepToFile } = require('./log_helper'); // Hàm đã dùng trước đó

const WORK_HOURS_PER_DAY = 8;

// Tính thời lượng task (giờ) dựa vào startTime, endTime
function getTaskDurationInHours(task) {
  const start = new Date(task.startTime);
  const end = new Date(task.endTime);
  const msDiff = end - start;
  const days = msDiff / (1000 * 60 * 60 * 24);
  return days * WORK_HOURS_PER_DAY;
}

// Tính chi phí của task = thời lượng * cost mỗi giờ của assignee
function calculateCostPerTask(task) {
  if (!task.assignee || !task.startTime || !task.endTime) {
    task.cost = 0;
    return 0;
  }

  const durationHours = getTaskDurationInHours(task);
  const rate = task.assignee.costPerHour || 0;
  const cost = durationHours * rate;
  task.cost = +cost.toFixed(2); // Làm tròn 2 chữ số
  return task.cost;
}

// Ghi log chi phí từng task và tổng chi phí của 1 project
function logCostByProject(project) {
  let total = 0;
  const lines = [`💰 Chi phí dự kiến cho project ${project.projectKey}\n`];

  for (const task of project.tasks) {
    const cost = calculateCostPerTask(task);
    total += cost;

    lines.push(`- Task [#${task.id}] – ${task.name || ''}`);
    lines.push(`  + Assignee: ${task.assignee?.id || 'Unassigned'}`);
    lines.push(`  + Time: ${task.startTime || '---'} → ${task.endTime || '---'}`);
    lines.push(`  + Cost: ${cost.toFixed(2)} đ\n`);
  }

  lines.push(`\n🧾 Tổng chi phí: ${total.toFixed(2)} đ`);
  logStepToFile(`cost_${project.projectKey}`, lines.join('\n'));
}

module.exports = {
  calculateCostPerTask,
  logCostByProject,
  getTaskDurationInHours
};
