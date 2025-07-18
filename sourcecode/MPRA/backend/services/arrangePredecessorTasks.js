const fs = require("fs");

const findPreceedingTasks = async (tasks) => {
    console.log("Starting to process tasks...");

    // Chuyển startTime và endTime thành Date
    tasks.forEach(task => {
        task.startTime = new Date(task.startTime);
        task.endTime = new Date(task.endTime);
    });

    // Group theo projectKey
    const projectMap = new Map();
    tasks.forEach(task => {
        if (!projectMap.has(task.projectKey)) {
            projectMap.set(task.projectKey, []);
        }
        projectMap.get(task.projectKey).push(task);
    });

    const preceedingTasksMap = {};

    // Process từng project riêng biệt
    for (let [projectKey, projectTasks] of projectMap.entries()) {
        // Sort theo endTime
        projectTasks.sort((a, b) => a.endTime - b.endTime);

        let active = []; // sẽ là sliding window

        for (let i = 0; i < projectTasks.length; i++) {
            const currentTask = projectTasks[i];
            const currentStart = currentTask.startTime;
            const preceedingTasks = new Set();

            // Loại bỏ các task đã "hết hiệu lực" (endTime <= currentStart)
            while (active.length > 0 && active[0].endTime <= currentStart) {
                const finishedTask = active.shift();
                preceedingTasks.add(finishedTask.id);
            }

            preceedingTasksMap[currentTask.id] = Array.from(preceedingTasks);
            currentTask.preceedingTasks = Array.from(preceedingTasks);

            // Thêm currentTask vào active window
            active.push(currentTask);
        }
    }


}

module.exports = findPreceedingTasks;
