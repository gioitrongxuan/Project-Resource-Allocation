const dagre = require("dagre");

// Định nghĩa Task
class Task {
    constructor(name, duration, resources) {
        this.name = name;
        this.duration = duration;
        this.resources = resources;  // Tài nguyên cần thiết
        this.startTime = null;
        this.endTime = null;
    }
}

// Hàm tìm Critical Path
function findCriticalPath(tasks, dependencies) {
    const graph = new dagre.graphlib.Graph();
    graph.setGraph({});
    graph.setDefaultEdgeLabel(() => ({}));

    tasks.forEach(task => {
        graph.setNode(task.name, { duration: task.duration });
    });

    dependencies.forEach(dep => {
        graph.setEdge(dep[0], dep[1]);
    });

    // Duyệt đồ thị để tìm đường găng (Critical Path)
    const orderedNodes = dagre.graphlib.alg.topsort(graph);
    let longestPath = [];
    let maxDuration = 0;
    let durationMap = {};

    orderedNodes.forEach(node => {
        let maxPrevDuration = 0;
        let prevTask = null;

        dependencies.forEach(([from, to]) => {
            if (to === node && durationMap[from] !== undefined) {
                let newDuration = durationMap[from] + graph.node(from).duration;
                if (newDuration > maxPrevDuration) {
                    maxPrevDuration = newDuration;
                    prevTask = from;
                }
            }
        });

        durationMap[node] = maxPrevDuration;
        if (maxPrevDuration > maxDuration) {
            maxDuration = maxPrevDuration;
            longestPath = [...(prevTask ? [prevTask] : []), node];
        }
    });

    return longestPath;
}

// Hàm lập lịch theo Critical Chain Method
function scheduleTasks(tasks, dependencies, resources) {
    const criticalPath = findCriticalPath(tasks, dependencies);
    let scheduledTasks = {};
    let currentTime = 0;

    for (let taskName of criticalPath) {
        let task = tasks.find(t => t.name === taskName);
        let assignedTime = currentTime;

        for (let otherTask of Object.values(scheduledTasks)) {
            if (task.resources.some(r => otherTask.resources.includes(r))) {
                assignedTime = Math.max(assignedTime, otherTask.endTime);
            }
        }

        task.startTime = assignedTime;
        task.endTime = assignedTime + task.duration;

        // Thêm buffer (20% thời gian task)
        let buffer = Math.ceil(0.2 * task.duration);
        task.endTime += buffer;

        scheduledTasks[task.name] = task;
        currentTime = task.endTime;
    }

    return scheduledTasks;
}

// Danh sách công việc
const tasks = [
    new Task("T1", 5, ["A"]),
    new Task("T2", 3, ["B"]),
    new Task("T3", 4, ["A"]),
    new Task("T4", 2, ["C"]),
    new Task("T5", 6, ["A"]),
];

// Ràng buộc giữa các công việc
const dependencies = [
    ["T1", "T2"],
    ["T1", "T3"],
    ["T3", "T4"],
    ["T2", "T4"],
    ["T4", "T5"],
];

// Danh sách tài nguyên
const resources = ["A", "B", "C"];

// Tính toán lịch trình tối ưu với CCM
const schedule = scheduleTasks(tasks, dependencies, resources);

// In kết quả
console.log("📌 Lịch trình tối ưu:");
Object.values(schedule).forEach(task => {
    console.log(
        `🔹 ${task.name}: Bắt đầu ${task.startTime}, Kết thúc ${task.endTime}, Buffer ${Math.ceil(0.2 * task.duration)} ngày`
    );
});
