const path = require('path');
const fs = require('fs');
const XLSX = require('xlsx');


exports.handleJsonUpload = async (req, res) => {
    try {
        const jsonData = req.body;
        const projects = [];
        const tasks = [];
        const employees = [];

        Object.keys(jsonData).forEach(sheet => {
            jsonData[sheet].forEach(row => {
                // projects
                if (!projects.some(p => p.projectKey === row['Project key'])) {
                    projects.push({
                        projectKey: row['Project key'] || '',
                        projectName: row['Project name'] || '',
                        projectType: row['Project type'] || '',
                        projectLead: row['Project lead'] || '',
                    });
                }

                // tasks
                tasks.push({
                    issueKey: row['Issue key'] || '',
                    summary: row['Summary'] || '',
                    description: row['Description'] || '',
                    issueId: row['Issue id'] || '',
                    parentId: row['Parent id'] || '',
                    issueType: row['Issue Type'] || '',
                    status: row['Status'] || '',
                    projectKey: row['Project key'] || '',
                    priority: row['Priority'] || '',
                    resolution: row['Resolution'] || '',
                    created: row['Created'] || '',
                    updated: row['Updated'] || '',
                    resolved: row['Resolved'] || '',
                    assignee: row['Assignee'] || '',
                });

                // employees
                ['Assignee', 'Reporter', 'Creator'].forEach(role => {
                    if (row[role] && !employees.some(e => e.name === row[role])) {
                        employees.push({ name: row[role] });
                    }
                });
            });

 
        });

                   // Filter out empty employees before saving
                   employees = employees.filter(emp => emp.name && emp.name.trim() !== '');
                   console.log("eff",employees);

        res.json({ projects, tasks, employees });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.readServerFile = (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(__dirname, '../server_files', filename);

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ message: 'File not found' });
    }

    const wb = XLSX.readFile(filePath);
    const sheetsData = {};
    const projects = [];
    const tasks = [];
    let employee = [];
    let  employees = [];
    let projectId = 1; // Initialize project ID counter

    wb.SheetNames.forEach(sheetName => {
        const ws = wb.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(ws);
        sheetsData[sheetName] = json;
        json.forEach( row => {
            // projects
            if (!projects.some(p => p.projectKey === row['Project key'])) {
                projects.push({
                    id: projectId++,
                    projectKey: row['Project key'] || '',
                    projectName: row['Project name'] || '',
                    projectType: row['Project type'] || '',
                    projectLead: row['Project lead'] || '',
                    description: row['Description'] || '',
            
                });
            }
 
            // tasks
            tasks.push({
                id: row['Issue id'] || '',
                code: row['Issue key'] || '',
                name: row['Summary'] || '',
                projectKey: row['Project key'] || '',
                description: row['Description'] || '',
                startTime: row['Created'] || '',
                endTime: row['Resolved'] || '',
                assignee: row['Assignee'] ,
                estimateNormalTime: row['Estimated time'] || (new Date(row['Resolved']) - new Date(row['Created']))/1000/60/60/24,
            });

            // employees
            ['Assignee', 'Reporter', 'Creator'].forEach(role => {
                if (!employee.some(e => e.name === row[role])) {
                    employee.push({ name: row[role] });
                }
            });
                               // Filter out empty employees before saving
             employees = employee.filter(emp => emp.name && emp.name.trim() !== '');
        });
    });

    res.json({ projects, tasks, employees });
};
