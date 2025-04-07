import { useState } from "react";
import Button from "./ui/Button";
import Table from "./ui/Table";
import axiosInstance from '../apis/index';
const ProcessedData = () => {
  const data = localStorage.getItem("slittedTasks");
  const tasks = JSON.parse(data).tasks;
  const [sortedTasks, setSortedTasks] = useState([]);
  const [criticalPath, setCriticalPath] = useState([]);
  const [parallelTasks, setParallelTasks] = useState({});

  const handleProcessCPM = async () => {
    try {
        const response = await axiosInstance.post("data/cpm", {
            tasks,
      });
      
      if (!response.ok) {
        throw new Error("Lỗi xử lý CPM trên server");
      }
      
      const result = await response.json();
      setSortedTasks(result.sortedTasks);
      setCriticalPath(result.criticalPath);
      setParallelTasks(result.parallelTasks);
    } catch (error) {
      console.error("Lỗi:", error);
      alert("Xảy ra lỗi khi xử lý CPM");
    }
  };

  return (
    <div>
     
      <Button onClick={handleProcessCPM}>Tính CPM</Button>
      {sortedTasks.length > 0 && (
        <div>
          <h3>Thứ tự topo:</h3>
          <p>{sortedTasks.join(" → ")}</p>
        </div>
      )}
      {criticalPath.length > 0 && (
        <div>
          <h3>Đường tới hạn (CPM):</h3>
          <p>{criticalPath.join(" → ")}</p>
        </div>
      )}
      {Object.keys(parallelTasks).length > 0 && (
        <div>
          <h3>Số công việc song song theo thời gian:</h3>
          <ul>
            {Object.entries(parallelTasks).map(([time, count]) => (
              <li key={time}>Thời điểm {time}: {count} công việc</li>
            ))}
          </ul>
        </div>
      )}
       <Table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Assignee</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.code}</td>
              <td>{task.name}</td>
              <td>{task.assignee}</td>
              <td>{task.priority}</td>
              <td>{task.status}</td>
              <td>{task.estimateNormalTime}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProcessedData;
