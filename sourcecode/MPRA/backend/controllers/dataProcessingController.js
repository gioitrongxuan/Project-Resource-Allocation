const splitTasks = require('../services/splitTasks');
const  splitTasksController= async (tasks) => {
    const result = await splitTasks(tasks);
    return result;
}

module.exports = { splitTasksController };