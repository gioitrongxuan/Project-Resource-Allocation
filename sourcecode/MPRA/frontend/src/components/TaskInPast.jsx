import { useState } from 'react';
import * as XLSX from 'xlsx';
import axiosInstance from '../apis/index';
import axios from 'axios';
const TaskInPast = () => {
    const [file, setFile] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [employeeScores, setEmployeeScores] = useState([]);
    const [taskScores, setTaskScores] = useState([]);
    const data = localStorage.getItem('result');
    const employees = JSON.parse(data).employees;

    const handleParse = async () => {
        const reader = new FileReader();
        reader.onload = async (evt) => {
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });
            const sheetsData = [];

            wb.SheetNames.forEach(sheetName => {
                const ws = wb.Sheets[sheetName];
                const json = XLSX.utils.sheet_to_json(ws);
                json.forEach(row => {
                    sheetsData.push({
                        taskName: row['Task Name'],
                        description: row['Description'],
                    });
                });
            });

            await axiosInstance.post('/files/parse-tasks', { tasks: sheetsData });
            setTasks(sheetsData);
        };

        reader.readAsArrayBuffer(file);
    };

    const handleUseServerFile = async () => {
        try {
            const res = await axiosInstance.get('/files/read-server-file-task-past/TaskInPast.xlsx');
            const result = res.data;

            const filteredTasks = result.tasks.filter(task =>
                employees.some(emp => emp.name === task.assignee)
            );
            console.log('filteredTasks', filteredTasks);
            setTasks(filteredTasks || []);
        } catch (error) {
            console.error('Error fetching or filtering tasks:', error);
        }
    };

    const handleDownload = () => {
        const truncatedTasks = tasks.map(task => ({
            ...task,
            name: task.name?.substring(0, 32767),
            description: task.description?.substring(0, 32767),
        }));
        const ws = XLSX.utils.json_to_sheet(truncatedTasks);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Tasks');
        XLSX.writeFile(wb, 'Tasks.xlsx');
    };

    
    const handleAnalyze = async () => {
        try {
            const res = await axios.post('http://127.0.0.1:8000/analyze', tasks, {
                headers: {
                    'Content-Type': 'application/json',
                    withCredentials: true,
                }
            });
    
            const { all_employee_scores, results } = res.data;
            console.log('all_employee_scores', all_employee_scores);
            const data = localStorage.getItem('result');
            const employees = all_employee_scores
            

            //update local storage
            localStorage.setItem('result', JSON.stringify({ employees, projects: JSON.parse(data).projects, tasks: JSON.parse(data).tasks }));
            setEmployeeScores(employees); // Năng lực nhân viên
            setTaskScores(results); // Yêu cầu công việc
        } catch (error) {
            console.error('Error analyzing tasks:', error);
        }
    };
    const saveData = async () => {
        try {
            const data = localStorage.getItem('result');
            // thêm tasks vào data
            const parsedData = JSON.parse(data);
            parsedData.tasksInPast = tasks;

            localStorage.setItem('result', JSON.stringify(parsedData));
            const res = await axiosInstance.post('/files/save-data', parsedData);
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }
    
    return (
        <div style={{ marginBottom: '30px' }}>
            <input type="file" accept=".xlsx" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleParse} disabled={!file} style={{ marginLeft: '10px' }}>
                Parse & Hiển thị
            </button>
            <button onClick={handleUseServerFile} style={{ marginLeft: '10px' }}>
                Dùng file server
            </button>
            <button onClick={handleDownload} disabled={tasks.length === 0} style={{ marginLeft: '10px' }}>
                Tải xuống Tasks.xlsx
            </button>

            <button onClick={handleAnalyze} disabled={tasks.length === 0} style={{ marginLeft: '10px' }}>
                Đánh giá năng lực nhân viên
            </button>

            <button onClick={saveData} disabled={tasks.length === 0} style={{ marginLeft: '10px' }}>
                Lưu dữ liệu vào server
            </button>

            {employeeScores.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Năng lực thực tế của nhân viên:</h3>
                    <table border="1" cellPadding="8">
                        <thead>
                            <tr>
                                <th>Assignee</th>
                                <th>Backend</th>
                                <th>Frontend</th>
                                <th>Database</th>
                                <th>DevOps</th>
                                <th>AI/ML</th>
                                <th>Testing</th>
                                <th>Issue Tracking</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employeeScores.map((employee, idx) => (
                                <tr key={idx}>
                                    <td>{employee.name}</td>
                                    <td>{employee.qualities.backend}</td>
                                    <td>{employee.qualities.frontend}</td>
                                    <td>{employee.qualities.database}</td>
                                    <td>{employee.qualities.devops}</td>
                                    <td>{employee.qualities.ai_ml}</td>
                                    <td>{employee.qualities.testing}</td>
                                    <td>{employee.qualities.issue_tracking}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {taskScores.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Yêu cầu năng lực cho từng Task:</h3>
                    <table border="1" cellPadding="8">
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Assignee</th>
                                <th>Backend</th>
                                <th>Frontend</th>
                                <th>Database</th>
                                <th>DevOps</th>
                                <th>AI/ML</th>
                                <th>Testing</th>
                                <th>Issue Tracking</th>
                            </tr>
                        </thead>
                        <tbody>
                            {taskScores.map((task, idx) => (
                                <tr key={idx}>
                                    <td>{task.name}</td>
                                    <td>{task.assignee}</td>
                                    <td>{task.task_scores.Backend}</td>
                                    <td>{task.task_scores.Frontend}</td>
                                    <td>{task.task_scores.Database}</td>
                                    <td>{task.task_scores.DevOps}</td>
                                    <td>{task.task_scores['AI/ML']}</td>
                                    <td>{task.task_scores.Testing}</td>
                                    <td>{task.task_scores['Issue Tracking']}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {tasks.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Danh sách Tasks:</h3>
                    <table border="1" cellPadding="8">
                        <thead>
                            <tr>
                                <th>Task Name</th>
                                <th>Description</th>
                                <th>Assignee</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <tr key={index}>
                                    <td>{task.name}</td>
                                    <td>{task.description}</td>
                                    <td>{task.assignee}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default TaskInPast;
