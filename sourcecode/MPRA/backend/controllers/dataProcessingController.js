const splitTasks = require('../services/splitTasks');
const findPreceedingTasks = require('../services/arrangePredecessorTasks');
const  splitTasksController= async (tasks) => {
    const result = await splitTasks(tasks);
    return result;
}

const findPreceedingTasksController = async (tasks) => {
    const result = await findPreceedingTasks(tasks);
    return result;
}
module.exports = { splitTasksController,findPreceedingTasksController };

