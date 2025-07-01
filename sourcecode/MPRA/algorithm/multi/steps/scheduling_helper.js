const fs = require('fs');
const path = require('path');

const WORK_HOURS_PER_DAY = 8;
const START_HOUR = 8; // 8h sáng
const END_HOUR = 17;
const MAX_TRY_DAYS = 100;

function getDurationInDays(estimateHours) {
  return Math.ceil(estimateHours / WORK_HOURS_PER_DAY);
}

function logStepToFile(stepName, content) {
  const outputDir = path.join(__dirname, 'output');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const filePath = path.join(outputDir, `${stepName}.txt`);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`[✔] Đã ghi kết quả bước ${stepName} vào: ${filePath}`);
}



function addWorkingHours(start, hours) {
  let remaining = hours;
  let current = new Date(start);

  while (remaining > 0) {
    let workStart = new Date(current);
    workStart.setHours(START_HOUR, 0, 0, 0);

    let workEnd = new Date(current);
    workEnd.setHours(END_HOUR, 0, 0, 0);

    if (current < workStart) current = new Date(workStart);

    const availableToday = (workEnd - current) / 3600000; // giờ còn lại hôm nay
    const workThisDay = Math.min(availableToday, remaining);

    current.setTime(current.getTime() + workThisDay * 3600000);
    remaining -= workThisDay;

    if (remaining > 0) {
      current.setDate(current.getDate() + 1);
      current.setHours(START_HOUR, 0, 0, 0);
    }
  }

  return current;
}

function isAvailable(employeeSchedule, start, end) {
  if (!employeeSchedule) return true;
  for (const { startTime, endTime } of employeeSchedule) {
    if (!(end <= startTime || start >= endTime)) return false;
  }
  return true;
}

function addToSchedule(schedule, empId, start, end) {
  if (!schedule[empId]) schedule[empId] = [];
  schedule[empId].push({ startTime: start, endTime: end });
}

function writeScheduleLog(projectKey, tasks) {
  const logLines = [`📋 Kết quả phân bổ sơ bộ cho project: ${projectKey}\n`];
  tasks.forEach(task => {
    const assigneeId = task.assignee ? task.assignee.id : 'Unassigned';
    logLines.push(
      `- Task [#${task.id}] - ${task.name || ''}:\n` +
      `  + Nhân sự: ${assigneeId}\n` +
      `  + Bắt đầu: ${task.startTime || '---'}\n` +
      `  + Kết thúc: ${task.endTime || '---'}\n`
    );
  });

  const logContent = logLines.join('\n');
  const outputDir = path.join(__dirname, 'logs');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
  fs.writeFileSync(path.join(outputDir, `schedule_${projectKey}.txt`), logContent, 'utf-8');
}

function scheduleTasksDynamically(projects, topoMap) {
  const empSchedule = {}; // { empId: [ {startTime, endTime} ] }

  for (const project of projects) {
    const taskMap = Object.fromEntries(project.tasks.map(t => [t.id, t]));
    const topoOrder = topoMap[project.projectKey];

    for (const taskId of topoOrder) {
      console.time(`⏳ Task_${taskId}`);
      const task = taskMap[taskId];
      const preds = task.requireBefore || [];

      let earliestStart = new Date(project.startTime || new Date());
      earliestStart.setHours(START_HOUR, 0, 0, 0);
      for (const predId of preds) {
        const pred = taskMap[predId];
        if (pred?.endTime && new Date(pred.endTime) > earliestStart) {
          earliestStart = new Date(pred.endTime);
        }
      }

      const estimateDays = task.estimateTime || 0;
      const estimateHours = estimateDays * WORK_HOURS_PER_DAY;
      let assigned = false;

      for (const emp of task.availableAssignee || []) {
        let current = new Date(earliestStart);
        let tryDays = 0;

        while (!assigned && tryDays < MAX_TRY_DAYS) {
          const end = addWorkingHours(current, estimateHours);
          if (isAvailable(empSchedule[emp.id], current, end)) {
            task.assignee = emp;
            task.startTime = current.toISOString();
            task.endTime = end.toISOString();
            addToSchedule(empSchedule, emp.id, current, end);
            assigned = true;
            break;
          }

          current.setDate(current.getDate() + 1);
          current.setHours(START_HOUR, 0, 0, 0);
          tryDays++;
        }

        if (assigned) break;
      }

      if (!assigned) {
        task.assignee = null;
        task.startTime = null;
        task.endTime = null;
        console.warn(`⚠ Không thể gán task ${task.id} - ${task.name}`);
      }

      console.timeEnd(`⏳ Task_${taskId}`);
    }

    writeScheduleLog(project.projectKey, project.tasks);
  }

  return projects;
}

module.exports = {
  scheduleTasksDynamically
};
