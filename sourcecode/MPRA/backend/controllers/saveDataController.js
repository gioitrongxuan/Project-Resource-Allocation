const fs = require('fs');
const RandomInt = (min, max) => Math.random() * (max - min) + min; // Inline implementation of RandomInt

function limitTasksPerEmployee(tasksInPast, maxTasks = 15) {
    const counter = new Map();
    const limitedTasks = [];
  
    for (const task of tasksInPast) {
      const assignee = task.assignee;
      if (!assignee) continue;
  
      const currentCount = counter.get(assignee) || 0;
  
      if (currentCount < maxTasks) {
        limitedTasks.push(task);
        counter.set(assignee, currentCount + 1);
      }
    }
  
    return limitedTasks;
  }
  
//   {
//     id: 4,
//     code: "A23",
//     name: "Dựng giao diện module quản lý thẻ",
//     preceedingTasks: ["E1"],
//     startTime: null,
//     endTime: null,
//     tags: ['frontend'],
//     requireAsset: [
//       { 
//         type: assetType_Laptop._id, 
//         number: 1, 
//         capacityValue: 2
//       },
//     ],
//     requireAssignee: {
//       backend: 1,
//       frontend: 2,
//       year_of_exp: 1
//     },
//     estimateNormalTime: 8,
//     kpiInTask: kpiA,
//     taskKPIWeight: 0.114,
//     status: 'proposal'
//   },

const saveDataController = async (req, res) => {
    try {
        const data = req.body;
        console.log("data",data);
        
        const employees = [...data.employees].map(employee => ({
            ...employee
        }));
        let tasks = [...data.tasks];
         
        
        
        const taskInPast = [...data.tasksInPast].map(task => {
            const assignedEmployee = employees.find(emp => emp.name === task.assignee);
            const topSkills = assignedEmployee?.qualities
                ? Object.entries(assignedEmployee.qualities)
                    .sort(([, a], [, b]) => b - a)
                    .slice(0, 2)
                    .map(([skill]) => skill)
                : [];
            const assignee = {
                id: assignedEmployee?.id || null,
                name: assignedEmployee?.name || null,
              }
            return {
            ...task,
            assignee,
            tags : topSkills, // Ensure RandomInt is defined and imported
            status: "done",
            requireAssign: assignedEmployee ? assignedEmployee.qualities : null,
            }

        });
        const taskOutofProject = limitTasksPerEmployee(data.tasksInPast, 15);
        let i =0;
        tasks.forEach(task => {
            const assignedEmployee = employees.find(emp => emp.name === task.assignee);
            task.requireAssign = assignedEmployee ? assignedEmployee.qualities : null;
        });
        tasks = tasks.map(task => {
            let processedTask = { ...task , requireAsset: [] };

            // Cải thiện logic để tạo tags
            // Đảm bảo processedTask.requireAssign tồn tại và là một đối tượng
            if (processedTask.requireAssign && typeof processedTask.requireAssign === 'object' && !Array.isArray(processedTask.requireAssign)) {
                const requireAssign = processedTask.requireAssign;

                // Chuyển đổi đối tượng thành mảng các cặp [key, value], sắp xếp theo giá trị giảm dần
                const sortedSkills = Object.entries(requireAssign).sort(([, valueA], [, valueB]) => valueB - valueA);

                // Lấy 2 kỹ năng có giá trị lớn nhất
                processedTask.tags = sortedSkills.slice(0, 2).map(([skillName]) => skillName);
            } else {
                // Nếu requireAssign không hợp lệ hoặc không tồn tại, gán tags là mảng rỗng
                processedTask.tags = [];
            }

            // Bạn có thể thêm các biến đổi khác ở đây, ví dụ:
            // - Chuyển đổi chuỗi ngày thành đối tượng Date
            // - Xác thực các trường cụ thể của task

            return processedTask;
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
    const totalDuration = projectTasks.reduce((total, task) => {
        const startTime = new Date(task.startTime).getTime();
        const endTime = new Date(task.endTime).getTime();
        return total + (isFinite(startTime) && isFinite(endTime) ? endTime - startTime : 0);
    }, 0);
    const totalDurationInDays = totalDuration / (1000 * 60 * 60 * 24); // Convert milliseconds to days



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
        tasks: projectTasks.map(task => {
            const assignedEmployee = employees.find(emp => emp.name === task.assignee);
            const topSkills = assignedEmployee?.qualities
                ? Object.entries(assignedEmployee.qualities)
                    .sort(([, a], [, b]) => b - a)
                    .slice(0, 2)
                    .map(([skill]) => skill)
                : [];
            return {
                ...task,
                tags: topSkills,
                requireAssign: assignedEmployee?.qualities || null,
                startTime: null,
                endTime: null,
            };
        }),
        employees: employees.filter(emp =>
            projectTasks.some(task => task.assignee === emp.name)
        )
    };
});

// {
//     id: 3,
//     code: "A22",
//     name: "Dựng trang phân bổ nguồn lực dự án",
//     preceedingTasks: ["E1"],
//     startTime: null,
//     endTime: null,
//     tags: ['frontend'],
//     requireAsset: [
//       { 
//         type: assetType_Laptop._id, 
//         number: 1, 
//         capacityValue: 1
//       },
//     ],
//     requireAssignee: {
//       degree: 2,
//       frontend: 2,
//     },
//     estimateNormalTime: 6,
//     kpiInTask: kpiA,
//     taskKPIWeight: 0.086,
//     status: 'proposal'
//   },
// định dạng cho dxclan 
const projectDX = projects.map(project => {
    return {
        ...project,
        tasks: project.tasks.filter(task => task.projectKey === project.projectKey).map(task => 
            ({
                id: task.id,
                code: task.code,
                name: task.name,
                //convert task id to task code array 
                 preceedingTasks : task.preceedingTasks.map(precedingTaskId => {
                const precedingTask = tasks.find(t => t.id === precedingTaskId);
                return precedingTask ? precedingTask.code : null;
                     }).filter(Boolean), // Remove null or undefined values
                startTime: null,
                endTime: null,
                requireAsset: task.requireAsset,
                requireAssignee: task.requireAssign,
                estimateNormalTime: task.estimateTime,
                tags: task.tags,
                taskKPIWeight: task.kpiInTask[0].weight,
                kpiInTask: '',
                status: 'proposal'
            })
        )}
    });
    // {
    //     id: 58,
    //     name: "Viết tài liệu công nghệ sử dụng",
    //     status: "finished",
    //     project: "",
    //     startDate: new Date('2024-07-25T06:00:00.000Z'),
    //     endDate: new Date('2024-07-26T10:00:00.000Z'),
    //     estimateNormalTime: 1.5,
    //     tags: ['document'],
    //     requireAssignee: {
    //       year_of_exp: 2,
    //       backend: 2,
    //       frontend: 2,
    //       docker: 2,
    //       ci_cd: 2
    //     },
    //     assignee: sw_NguyenVanMinh._id,
    //     point: 0.95,
    //     taskLq: "Task 15 of data phan bo",
    //     responsibleEmployees: [sw_NguyenVanMinh_User._id]
    //   },
    const taskInPastDX = [...data.tasksInPast].map(task => {
        const assignedEmployee = employees.find(emp => emp.name === task.assignee);
        const topSkills = assignedEmployee?.qualities
            ? Object.entries(assignedEmployee.qualities)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 2)
                .map(([skill]) => skill)
            : [];
        const assignee = {
            id: assignedEmployee?.id || null,
            name: assignedEmployee?.name || null,
          }
        return {
        id: task.id,
        name: task.name,
        status: "finished",
        project: task.projectKey,
        startDate: new Date(task.startTime),
        endDate: new Date(task.endTime),
        estimateNormalTime: task.estimateTime,
        requireAssignee: assignedEmployee ? assignedEmployee.qualities : null,
        assignee: assignee,
        tags : topSkills,
        evaluatePoint: task.evaluatePoint, // Ensure RandomInt is defined and imported
        status: "done",
        responsibleEmployees: [assignee.name],
        }

    });


// Danh sách projects chỉ giữ các tasks có estimate time > 1
// nhưng phải tính toán lại preceedingTasks 
const projects_1 = projects.map(project => {
    const filteredTasks = project.tasks.filter(task => task.estimateTime > 1);
    return {
        ...project,
        tasks: filteredTasks,
        employees: project.employees.filter(emp =>
            filteredTasks.some(task => task.assignee === emp.name)
        )
    };
});

//check lại preecedingTasks nếu nó không có trong danh sách tasks thì xoá nó đi
// "preceedingTasks": [
//     16720955
//   ],
projects_1.forEach(project => {
    project.tasks.forEach(task => {
        task.preceedingTasks = task.preceedingTasks.filter(precedingTaskId =>
            project.tasks.some(t => t.id === precedingTaskId)
        );
    });
}
);
// "kpiInTask": [
//     {
//       "id": 1,
//       "type": "A",
//       "weight": 0.00007758066855345199
//     }
// tính lại kpiInTask cho các task trong projects_1
projects_1.forEach(project => {
    const totalEstimateTime = project.tasks.reduce((total, task) => {
        const estimateTime = parseFloat(task.estimateTime);
        return total + (isFinite(estimateTime) ? estimateTime : 0);
    }, 0);
    // project.tasks.forEach(task => {
    //     const estimateTime = parseFloat(task.estimateTime);
    //     task.kpiInTask 
    //         = [
    //             {
    //                 id: 1,
    //                 type: "CircleTime",
    //                 weight: estimateTime / totalEstimateTime,
    //             }
    //         ];
    // });
});

// Danh sách project chỉ lấy 50 task 
const projects_2 = projects.map(project => {
    const filteredTasks = project.tasks.slice(0, 50);
    return {
        ...project,
        tasks: filteredTasks,
        employees: project.employees.filter(emp =>
            filteredTasks.some(task => task.assignee === emp.name)
        )
    }
});

projects_2.forEach(project => {
    project.tasks.forEach(task => {
        task.preceedingTasks = task.preceedingTasks.filter(precedingTaskId =>
            project.tasks.some(t => t.id === precedingTaskId)
        );
    });
});

// Tính lại kpiInTask cho các task trong projects_2
projects_2.forEach(project => {
    const totalEstimateTime = project.tasks.reduce((total, task) => {
        const estimateTime = parseFloat(task.estimateTime);
        return total + (isFinite(estimateTime) ? estimateTime : 0);
    }
    , 0);
    // project.tasks.forEach(task => {
    //     const estimateTime = parseFloat(task.estimateTime);
    //     task.kpiInTask = [
    //         {
    //             id: 1,
    //             type: "CircleTime",
    //             weight: estimateTime / totalEstimateTime,
    //         }
    //     ];
    // });
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

        const escapeProjects_1 = JSON.stringify(projects_1, (key, value) =>
            typeof value === 'string' ? escapeString(value) : value,
            2
        );

        const escapedProjects_2 = JSON.stringify(projects_2, (key, value) =>
            typeof value === 'string' ? escapeString(value) : value,
            2
        );
        const escapedTaskInPast = JSON.stringify(taskInPast, (key, value) =>
            typeof value === 'string' ? escapeString(value) : value,
            2
        );
        const escapedTaskOutofProject = JSON.stringify(taskOutofProject, (key, value) =>
            typeof value === 'string' ? escapeString(value) : value,
            2
        );
        const escapedTaskInPastDX = JSON.stringify(taskInPastDX, (key, value) =>
            typeof value === 'string' ? escapeString(value) : value,
            2
        );
        const escapedProjectDX = JSON.stringify(projectDX, (key, value) =>
            typeof value === 'string' ? escapeString(value) : value,
            2
        );


        // Lưu vào employees.js
        fs.writeFileSync(`${dirPath}/employees.js`, ` const employees = ${escapedEmployees}; module.exports = { employees };`);
        fs.writeFileSync(`${dirPath}/tasks.js`, ` const tasks = ${escapedTasks}; module.exports = { tasks };`);
        fs.writeFileSync(`${dirPath}/projects.js`, `const projects = ${escapedProjects}; module.exports = { projects };`);
        fs.writeFileSync(`${dirPath}/projects_1.js`, `const projects = ${escapeProjects_1}; module.exports = { projects };`);
        fs.writeFileSync(`${dirPath}/projects_2.js`, `const projects = ${escapedProjects_2}; module.exports = { projects};`);
        fs.writeFileSync(`${dirPath}/taskInPast.js`, `const allTasksInPast = ${escapedTaskInPast}; module.exports = { allTasksInPast };`);
        fs.writeFileSync(`${dirPath}/taskInPastController.js`, `const allTasksOutOfProject = ${escapedTaskOutofProject}; module.exports = { allTasksOutOfProject };`);
        fs.writeFileSync(`${dirPath}/taskInPastDX.js`, `const allTasksInPast = ${escapedTaskInPastDX}; module.exports = { allTasksInPast };`);
        fs.writeFileSync(`${dirPath}/taskProjectDX.js`, `const projects = ${escapedProjectDX}; module.exports = { projects };`);

        res.json({ message: 'Data saved successfully' });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports = { saveDataController };