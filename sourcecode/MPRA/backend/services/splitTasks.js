const findPreceedingTasks =  require('./arrangePredecessorTasks.js');
// const splitTasks = async (tasks) => {
//     let events = [];


//     // Step 1: Build events for each task (start and end)
//     tasks.forEach((task) => {
//         events.push({ time: new Date(task.startTime), type: 'start', task });
//         events.push({ time: new Date(task.endTime), type: 'end', task });
//     });

//     // Step 2: Sort events by time
//     events.sort((a, b) => {
//         if (a.time - b.time !== 0) {
//             return a.time - b.time;
//         } else {
//             // Prioritize 'end' events if timestamps are the same
//             return a.type === 'end' ? -1 : 1;
//         }
//     });

//     // Step 3: Process events for each assignee
//     let activeTasks = new Map(); // Map<assignee, Set<task>>
//     let prevTime = {};
//     let result = [];
//     let segmentCounters = {}; // Track segment index per task
    
//     for (let event of events) {
//         let assignee = event.task.assignee;
//         if (!activeTasks.has(assignee)) {
//             activeTasks.set(assignee, new Set());
//         }
//         if (!prevTime[assignee]) {
//             prevTime[assignee] = null;
//         }
//         let tasksSet = activeTasks.get(assignee);

//         if (prevTime[assignee] !== null && tasksSet.size > 0 && prevTime[assignee].getTime() !== event.time.getTime()) {
//             let duration = (event.time - prevTime[assignee]);
//             if (duration >= 120 * 60 * 1000) {
//                 let splitDuration = duration / tasksSet.size;
//                 let offset = 0;
//                 tasksSet.forEach((task) => {
//                     let segmentStart = new Date(prevTime[assignee].getTime() + offset+1000*60);
//                     let segmentEnd = new Date(segmentStart.getTime() + splitDuration-1000*60);
//                     if (!segmentCounters[assignee]) segmentCounters[assignee] = {};
//                     if (!segmentCounters[assignee][task.name]) segmentCounters[assignee][task.name] = 1;

//                     // result.push({
//                     //     ...task,
//                     //     parentId: task.parentId || task.id,
//                     //     id: task.id + segmentCounters[assignee][task.name]*1000000,
//                     //     code: task.code + "." + segmentCounters[assignee][task.name],
//                     //     name: task.name + "." + segmentCounters[assignee][task.name],
//                     //     startTime: segmentStart.toISOString(),
//                     //     endTime: segmentEnd.toISOString(),
//                     //     estimateNormalTime: splitDuration / 1000 / 60 / 60 / 24 ,
//                     // });
                    
//                     result.push({
//                         id: task.id + segmentCounters[assignee][task.name]*1000000,
//                         code: task.code + "." + segmentCounters[assignee][task.name],
//                         name: task.name + "." + segmentCounters[assignee][task.name],
//                         preceedingTasks: task.preceedingTasks || [],
//                         startTime: segmentStart.toISOString(),
//                         endTime: segmentEnd.toISOString(),
//                         requireAsset: task.requireAsset || [],
//                         tags: task.tags || [],
//                         estimateTime: splitDuration / 1000 / 60 / 60 / 24 ,
//                         requireAssign: task.requireAssign || {},
//                         kpiInTask: task.kpiInTask || [],
//                         projectKey: task.projectKey,
//                         assignee: task.assignee,
//                       });
                      
//                     segmentCounters[assignee][task.name]++;
//                     offset += splitDuration;
//                 });
//             }
//         }

//         // Update task states
//         if (event.type === 'start') {
//             tasksSet.add(event.task);
//         } else {
//             tasksSet.delete(event.task);
//         }
//         // Update prevTime for the correct assignee
//         prevTime[assignee] = event.time;
//     }
//     const result2 = findPreceedingTasks(result);
//     return result;
// }



const splitTasks = async (tasks) => {
    // Bước 1: Tính toán thời gian hiệu quả cho mỗi công việc (effectiveTimeMs)
    // Tạo một bản sao sâu để không sửa đổi mảng gốc và thêm thuộc tính effectiveTimeMs
    const tasksWithEffectiveTime = tasks.map(task => ({
        ...task,
        effectiveTimeMs: 0 // Khởi tạo thời gian hiệu quả tích lũy bằng 0
    }));

    let events = [];
    tasksWithEffectiveTime.forEach((task) => {
        events.push({ time: new Date(task.startTime), type: 'start', task });
        events.push({ time: new Date(task.endTime), type: 'end', task });
    });

    events.sort((a, b) => {
        if (a.time - b.time !== 0) {
            return a.time - b.time;
        } else {
            // Prioritize 'end' events if timestamps are the same
            return a.type === 'end' ? -1 : 1;
        }
    });

    let activeTasksForAssignee = new Map(); // Map<assignee, Set<task>>
    let prevTimeForAssignee = {}; // Stores the last processed time for each assignee
    
    for (let event of events) {
        let assignee = event.task.assignee;
        if (!activeTasksForAssignee.has(assignee)) {
            activeTasksForAssignee.set(assignee, new Set());
        }
        if (!prevTimeForAssignee[assignee]) {
            prevTimeForAssignee[assignee] = null;
        }
        let tasksSet = activeTasksForAssignee.get(assignee);

        if (prevTimeForAssignee[assignee] !== null && tasksSet.size > 0 && prevTimeForAssignee[assignee].getTime() !== event.time.getTime()) {
            let duration = (event.time - prevTimeForAssignee[assignee]);
            let effortPerTask = duration / tasksSet.size;

            tasksSet.forEach((task) => {
                task.effectiveTimeMs += effortPerTask;
            });
        }

        if (event.type === 'start') {
            tasksSet.add(event.task);
        } else {
            tasksSet.delete(event.task);
        }
        prevTimeForAssignee[assignee] = event.time;
    }

    // Chuyển đổi thời gian hiệu quả từ ms sang giờ và tính toán estimateNormalTime
    tasksWithEffectiveTime.forEach(task => {
        task.effectiveTimeHours = task.effectiveTimeMs / (1000 * 60 * 60);
        // Làm tròn effectiveTimeHours cho dễ nhìn
        task.effectiveTimeHours = parseFloat(task.effectiveTimeHours.toFixed(2)); 
        
        // Tính toán estimateNormalTime: số ngày (8 giờ/ngày)
        // Đảm bảo không chia cho 0 nếu effectiveTimeHours là 0
        task.estimateNormalTime = task.effectiveTimeHours > 0 ? parseFloat((task.effectiveTimeHours / 24).toFixed(2)) : 0;
        
        delete task.effectiveTimeMs; // Xóa thuộc tính tạm thời
    });

    // Bước 2: Xây dựng lịch trình tuần tự mới dựa trên effectiveTime
    // Sắp xếp lại các công việc để xây dựng lịch trình.
    // Ưu tiên: startTime gốc, sau đó là tên task (hoặc ID) để có thứ tự ổn định.
    tasksWithEffectiveTime.sort((a, b) => {
        const timeDiff = new Date(a.startTime) - new Date(b.startTime);
        if (timeDiff !== 0) {
            return timeDiff;
        }
        return a.name.localeCompare(b.name); // Sắp xếp theo tên nếu thời gian bắt đầu giống nhau
    });

    let newSchedule = [];
    let currentEndTimeForAssignee = {}; // Lịch sử thời gian kết thúc cuối cùng cho mỗi người được giao

    tasksWithEffectiveTime.forEach(task => {
        const assignee = task.assignee;
        const currentTaskEffectiveDurationMs = task.effectiveTimeHours * 1000 * 60 * 60;

        // Nếu effectiveTimeHours quá nhỏ (ví dụ < 1 phút) thì có thể bỏ qua hoặc làm tròn lên
        // if (currentTaskEffectiveDurationMs < 60 * 1000) { // Dưới 1 phút
        //     // console.warn(`Task "${task.name}" for ${assignee} has too little effective time (${task.effectiveTimeHours}h), skipping.`);
        //     return; 
        // }

        let actualSegmentStartTime;

        // Xác định thời gian bắt đầu của phân đoạn mới
        // Phân đoạn sẽ bắt đầu từ:
        // 1. Thời gian kết thúc của công việc gần nhất của người được giao đó.
        // 2. Hoặc, thời gian bắt đầu gốc của chính công việc đó (nếu đó là công việc đầu tiên của người đó hoặc không có chồng chéo).
        // 3. Ưu tiên: không bắt đầu trước thời gian bắt đầu gốc của công việc.
        const lastEndTime = currentEndTimeForAssignee[assignee];
        if (lastEndTime) {
            // Công việc mới sẽ bắt đầu sau công việc trước đó của cùng người đó
            actualSegmentStartTime = new Date(Math.max(lastEndTime.getTime(), new Date(task.startTime).getTime()));
        } else {
            // Đây là công việc đầu tiên của người được giao đó, hoặc không có công việc trước đó
            actualSegmentStartTime = new Date(task.startTime);
        }

        let actualSegmentEndTime = new Date(actualSegmentStartTime.getTime() + currentTaskEffectiveDurationMs);

        // Cập nhật thời gian kết thúc cuối cùng cho người được giao này
        currentEndTimeForAssignee[assignee] = actualSegmentEndTime;

        // Tạo một đối tượng công việc mới cho lịch trình tuần tự
        newSchedule.push({
            ...task,
            id: task.id, 
            name: task.name,
            startTime: actualSegmentStartTime.toISOString(),
            endTime: actualSegmentEndTime.toISOString(),
            // Thêm trường mới estimateNormalTime
            estimateNormalTime: task.estimateNormalTime, 
            calculatedEffectiveHours: task.effectiveTimeHours // Giữ lại effectiveTimeHours để tham khảo
        });
    });
    const result2 = findPreceedingTasks(newSchedule);
    return newSchedule;
};
module.exports = splitTasks;