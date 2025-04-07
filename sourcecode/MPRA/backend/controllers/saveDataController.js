const fs = require('fs');
const { join } = require('path');
const saveDataController = async (req, res) => {
    try {
        const data = req.body;
        console.log("data",data);
        const employees = [...data.employees].map(employee => ({
            ...employee
        }));
        const tasks = [...data.tasks].map(task => ({
            ...task,
            kpiInTask: null,
        }));
        console.log("tasks",employees);
        

        let i =0;
        tasks.forEach(task => {
            const assignedEmployee = employees.find(emp => emp.name === task.assignee);
            task.requireAssign = assignedEmployee ? assignedEmployee.skills : null;
            console.log("task",task);
        });
        // const project = {
        //     startTime: START_DATE,
        //     endTime: END_DATE,
        //     tasks: tasks,
        //     kpiTarget: kpiTarget,
        //     employees: employees,
        //     assets: assets
        //   }
          

       const projects = [...data.projects].map(project => {
    const projectTasks = tasks.filter(task => task.projectKey === project.projectKey);

    const startTimestamp = projectTasks.reduce((min, task) => {
        const time = new Date(task.startTime).getTime();
        return time < min ? time : min;
    }, Infinity);

    const endTimestamp = projectTasks.reduce((max, task) => {
        const time = new Date(task.endTime).getTime();
        return time > max ? time : max;
    }, -Infinity);

    return {
        ...project,
        startTime: isFinite(startTimestamp) ? new Date(startTimestamp).toISOString() : null,
        endTime: isFinite(endTimestamp) ? new Date(endTimestamp).toISOString() : null,
        assets: null,
        tasks: projectTasks,
        employees: employees.filter(emp =>
            projectTasks.some(task => task.assignee === emp.name)
        )
    };
});


        // Tạo thư mục nếu chưa tồn tại
        const dirPath = '../data/input';
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        // Escape special characters in JSON strings
        const escapeString = (str) => str.replace(/\\/g, '\\\\').replace(/"/g, '\\"');

        // Prepare data with escaped strings
        const escapedEmployees = JSON.stringify(employees, (key, value) =>
            typeof value === 'string' ? escapeString(value) : value,
            2 // Indentation level for pretty-printing
        );
        const escapedTasks = JSON.stringify(tasks, (key, value) =>
            typeof value === 'string' ? escapeString(value) : value,
            2
        );
        const escapedProjects = JSON.stringify(projects, (key, value) =>
            typeof value === 'string' ? escapeString(value) : value,
            2
        );

        // Lưu vào employees.js
        fs.writeFileSync(`${dirPath}/employees.js`, `export const employees = ${escapedEmployees};`);
        fs.writeFileSync(`${dirPath}/tasks.js`, `export const tasks = ${escapedTasks};`);
        fs.writeFileSync(`${dirPath}/projects.js`, `export const projects = ${escapedProjects};`);

        res.json({ message: 'Data saved successfully' });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports = { saveDataController };