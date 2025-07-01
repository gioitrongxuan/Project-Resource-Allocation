const fs = require('fs');
const path = require('path');
const DAY_WORK_HOURS = 8; // Giờ làm việc trong một ngày
function logStepToFile(stepName, content) {
  const folder = path.join(__dirname, 'output');
  if (!fs.existsSync(folder)) fs.mkdirSync(folder);
  const filePath = path.join(folder, `${stepName}.txt`);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`[✔] Đã ghi log: ${filePath}`);
}

function topologicalSort(tasks) {
  const graph = {};
  const inDegree = {};
  const sorted = [];

  tasks.forEach(task => {
    graph[task.id] = [];
    inDegree[task.id] = 0;
  });

  tasks.forEach(task => {
    if (task.requireBefore) {
      task.requireBefore.forEach(dep => {
        graph[dep].push(task.id);
        inDegree[task.id]++;
      });
    }
  });

  const queue = Object.keys(inDegree).filter(id => inDegree[id] === 0);
  while (queue.length > 0) {
    const current = queue.shift();
    sorted.push(current);
    graph[current].forEach(neighbor => {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    });
  }

  return sorted;
}

function calculateCPM(tasks, sorted, projectStartTime, projectEndTime, unitTime, n) {
  if (!tasks || !tasks.length) return 0;

  let updateTasks = [...tasks];

  // Chuyển đổi projectStartTime và projectEndTime thành kiểu Date hợp lệ
  projectStartTime = new Date(projectStartTime);
  projectEndTime = new Date(projectEndTime);

  if (isNaN(projectStartTime.getTime()) || isNaN(projectEndTime.getTime())) {
    throw new Error("Invalid project start or end time");
  }

  // Tạo bảng successors để xác định các task kế nhiệm
  let successors = {};
  updateTasks.forEach(task => {
    task.ES = new Date(projectStartTime);
    task.EF = new Date(projectStartTime);
    task.LS = new Date(projectEndTime);
    task.LF = new Date(projectEndTime);

    // Xây dựng danh sách successors
    task.requireBefore?.forEach(prevId => {
      if (!successors[prevId]) {
        successors[prevId] = [];
      }
      successors[prevId].push(task.id);
    });
  });

  // Sắp xếp task theo thứ tự ưu tiên (dựa trên sorted)
  updateTasks.sort((a, b) => sorted.indexOf(a.id) - sorted.indexOf(b.id));

  let activeTasks = []; // Danh sách các task đang chạy (tối đa n)

  // Tính ES, EF (forward pass) với ràng buộc số lượng task song song
  updateTasks.forEach(task => {
    let preceedingTasks = (task.requireBefore || [])
      .map(id => updateTasks.find(t => t.id === id))
      .filter(Boolean);

    let maxEF = preceedingTasks.length
      ? Math.max(...preceedingTasks.map(t => t.EF.getTime()))
      : projectStartTime.getTime();

    task.ES = new Date(maxEF);
    if (isNaN(task.ES.getTime())) {
      console.error("Invalid Date in ES:", task);
      task.ES = new Date(projectStartTime); // Cố định lỗi
    }

    // Kiểm tra nếu đã đủ n task đang thực hiện
    while (activeTasks.length >= n) {
      let minFinishTask = activeTasks.reduce((prev, curr) => (prev.EF < curr.EF ? prev : curr));
      activeTasks = activeTasks.filter(t => t !== minFinishTask);
    }

    task.ES = reCalculateTimeWorking(task.ES);
    task.EF = calculateEndDateFromStartDate(task.ES, task.estimateTime, unitTime);
    task.EF = reCalculateTimeWorking(task.EF);

    activeTasks.push(task); // Thêm task vào danh sách đang thực hiện
  });

  // Tính LS, LF (backward pass)
  updateTasks.reverse().forEach(task => {
    let successorTasks = (successors[task.id] || [])
      .map(id => updateTasks.find(t => t.id === id))
      .filter(Boolean);

    let minLS = successorTasks.length
      ? Math.min(...successorTasks.map(t => t.LS.getTime()))
      : projectEndTime.getTime();

    task.LF = new Date(minLS);
    if (isNaN(task.LF.getTime())) {
      console.error("Invalid Date in LF:", task);
      task.LF = new Date(projectEndTime); // Cố định lỗi
    }

    task.LS = calculateStartDateFromEndDate(task.LF, task.estimateTime, unitTime);
  });

  // Tính tổng thời gian của critical path
  const criticalPathDuration = Math.max(...updateTasks.map(task => (task.EF - task.ES) / (1000 * 60 * 60 * 24)));

  return criticalPathDuration;
}

function reCalculateTimeWorking(time, isStartIndex = false) {
  // Đưa về giờ làm chuẩn
  if (time.getHours() >= 17) { // giờ >=17 chuyển sang ngày hôm sau
      time.setDate(time.getDate() + 1);
      time.setHours(8 + time.getHours() - 17)
  } else if (time.getHours() >= 12) {
      time.setHours(time.getHours())
  } else if (time.getHours() < 8) {
    // Nếu < 8h mà là bắt đầu của luồng công việc
      if (isStartIndex) {
          time.setHours(8)
      } else {
      // Chưa hiểu chỗ này
      time.setHours(16 + time.getHours())
      }
  };

  while (time.getDay() % 6 == 0 || time.getDay() % 7 == 0) { // Không làm chủ nhật
      time.setDate(time.getDate() + 1);
  }

  return time;
}

function calculateEndDateFromStartDate(startDate, duration, unitTime = 'days') {
  // console.log("startDate, duration, unitTIme: ", startDate, duration, unitTime)
  if (unitTime === 'days') {
    let numDay = Math.floor(duration)
    let remainHour = (duration - numDay) * DAY_WORK_HOURS
    let endDate = new Date(startDate).getTime() + (remainHour * 3600 * 1000 + numDay * 24 * 3600 * 1000)
    return new Date(endDate)
  } else {
    let endDate = new Date(startDate).getTime() + duration * 3600 * 1000
    return new Date(endDate)
  }
}
function calculateStartDateFromEndDate(endDate, duration, unitTime = 'days') {
  if (unitTime === 'days') {
    let numDay = Math.floor(duration)
    let remainHour = (duration - numDay) * DAY_WORK_HOURS
    let startDate = new Date(endDate).getTime() - (remainHour * 3600 * 1000 + numDay * 24 * 3600 * 1000)
    return new Date(startDate)
  } else {
    // unitTime = hours
    let startDate = new Date(endDate).getTime() - duration * 3600 * 1000
    return new Date(startDate)
  }
}

function preprocessProjects(projects) {
  let logContent = `[STEP 1 - TOPO SORT + CPM]\n\n`;

  const result = [];

  for (const project of projects) {
    const sortedTasks = topologicalSort(project.tasks);
    const duration = calculateCPM(project.tasks, sortedTasks, project.startTime, project.endTime, 'days', project.employees.length);

    result.push({
      projectId: project.projectKey || project.id,
      sortedTasks,
      criticalPathDuration: Number(duration.toFixed(2))
    });

    logContent += `>> Project ${project.projectKey || project.id}\n`;
    logContent += `- Topo Order: ${sortedTasks.join(' → ')}\n`;
    logContent += `- Critical Path Duration: ${duration.toFixed(2)} ngày\n\n`;
    logContent += `- Thời gian bắt đầu: ${project.startTime}\n`;
    logContent += `- Thời gian kết thúc: ${project.endTime}\n`;
    const projectDuration = new Date(project.endTime).getTime() - new Date(project.startTime).getTime();
    logContent += `- Thời gian thực tế: ${projectDuration / (1000 * 3600 * 24)} ngày\n`;
  }

  logStepToFile('step1_toposort_cpm', logContent);
  return result;
}

module.exports = {
  preprocessProjects
};
