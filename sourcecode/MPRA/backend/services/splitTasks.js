const findPreceedingTasks =  require('./arrangePredecessorTasks.js');
const splitTasks = async (tasks) => {
    let events = [];

    // Step 1: Build events for each task (start and end)
    tasks.forEach((task) => {
        events.push({ time: new Date(task.startTime), type: 'start', task });
        events.push({ time: new Date(task.endTime), type: 'end', task });
    });

    // Step 2: Sort events by time
    events.sort((a, b) => {
        if (a.time - b.time !== 0) {
            return a.time - b.time;
        } else {
            // Prioritize 'end' events if timestamps are the same
            return a.type === 'end' ? -1 : 1;
        }
    });

    // Step 3: Process events for each assignee
    let activeTasks = new Map(); // Map<assignee, Set<task>>
    let prevTime = {};
    let result = [];
    let segmentCounters = {}; // Track segment index per task
    
    for (let event of events) {
        let assignee = event.task.assignee;
        if (!activeTasks.has(assignee)) {
            activeTasks.set(assignee, new Set());
        }
        if (!prevTime[assignee]) {
            prevTime[assignee] = null;
        }
        let tasksSet = activeTasks.get(assignee);

        if (prevTime[assignee] !== null && tasksSet.size > 0 && prevTime[assignee].getTime() !== event.time.getTime()) {
            let duration = (event.time - prevTime[assignee]);
            if (duration >= 120 * 60 * 1000) {
                let splitDuration = duration / tasksSet.size;
                let offset = 0;
                tasksSet.forEach((task) => {
                    let segmentStart = new Date(prevTime[assignee].getTime() + offset+1000);
                    let segmentEnd = new Date(segmentStart.getTime() + splitDuration-1000);
                    if (!segmentCounters[assignee]) segmentCounters[assignee] = {};
                    if (!segmentCounters[assignee][task.name]) segmentCounters[assignee][task.name] = 1;

                    result.push({
                        ...task,
                        parentId: task.parentId || task.id,
                        id: task.id + segmentCounters[assignee][task.name]*100,
                        code: task.code + "." + segmentCounters[assignee][task.name],
                        name: task.name + "." + segmentCounters[assignee][task.name],
                        startTime: segmentStart.toISOString(),
                        endTime: segmentEnd.toISOString(),
                        estimateNormalTime: splitDuration / 1000 / 60 / 60 / 24 ,
                    });
                    segmentCounters[assignee][task.name]++;
                    offset += splitDuration;
                });
            }
        }

        // Update task states
        if (event.type === 'start') {
            tasksSet.add(event.task);
        } else {
            tasksSet.delete(event.task);
        }
        // Update prevTime for the correct assignee
        prevTime[assignee] = event.time;
    }
    console.log("dang o ");
    const result2 = findPreceedingTasks(result);
    return result;
}
module.exports = splitTasks;