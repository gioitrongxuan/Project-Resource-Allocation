import React, { useEffect, useRef, useState } from "react";
import { Timeline } from "vis-timeline/standalone";
import "vis-timeline/styles/vis-timeline-graph2d.min.css";
import moment from "moment";
import axiosInstance from '../apis/index';

const TaskGantt = () => {
  const result = JSON.parse(localStorage.getItem('result'));
  const tasks = result.tasks;
  const timelineRef = useRef(null);
  const [timelineInstance, setTimelineInstance] = useState(null);
  const [taskList, setTaskList] = useState(tasks);

  // Hàm ánh xạ projectKey thành màu sắc
  const getColorByProjectKey = (projectKey) => {
    const colors = {
      ENTMQMAAS_3xxxx: "#FF5733",
      ENTMQMAAS_4xxxx: "#33FF57",
      ENTMQMAAS_5xxxx: "#3357FF",
      default: "#CCCCCC",
    };
    return colors[projectKey] || colors.default;
  };

  useEffect(() => {
    if (!timelineRef.current || !taskList || taskList.length === 0) return;

    const container = timelineRef.current;

    // Lấy danh sách nhân viên
    const assignees = [...new Set(taskList.map((task) => task.assignee))];

    // Tạo nhóm theo nhân viên
    const groups = assignees.map((assignee, index) => ({
      id: index + 1,
      content: assignee || "Không xác định",
    }));

    // Tạo danh sách task với group tương ứng
    const items = taskList.map((task, index) => ({
      id: index + 1,
      group: assignees.indexOf(task.assignee) + 1,
      content: task.name || `Task ${index + 1}`,
      start: moment(task.startTime, "YYYY/MM/DD HH:mm").toDate(),
      end: moment(task.endTime, "YYYY/MM/DD HH:mm").toDate(),
      className: "gantt-task",
      style: `background-color: ${getColorByProjectKey(task.projectKey)};`,
    }));

    const options = {
      editable: false,
      margin: { item: 10 },
      showCurrentTime: true,
      stack: true,
      zoomable: true,
      horizontalScroll: true,
      zoomKey: "ctrlKey",
      width: "100%",
      height: "100%",
    };

    const timeline = new Timeline(container, items, options);
    timeline.setGroups(groups);
    setTimelineInstance(timeline);

    window.addEventListener("resize", () => timeline.fit());

    return () => {
      timeline.destroy();
      window.removeEventListener("resize", () => timeline.fit());
    };
  }, [taskList]);

  const goToFirstTask = () => {
    if (timelineInstance && taskList.length > 0) {
      const firstTaskStart = moment(taskList[0].startTime, "YYYY/MM/DD HH:mm").toDate();
      timelineInstance.moveTo(firstTaskStart);
    }
  };

  const goSplitTasks = async () => {
    const result = await axiosInstance.post('data/split-tasks', { tasks: taskList });
    console.log(result);
    setTaskList(result.data);
    localStorage.setItem('slittedTasks', JSON.stringify({ tasks: result.data }));
       // Save to Excel
       const data1 = JSON.parse(localStorage.getItem('slittedTasks'));
       const data2 = JSON.parse(localStorage.getItem('result'));
     
   
       const tasks = data1.tasks;
       const projects =  data2.projects;
       const employees = data2.employees;
       
       const data = { tasks, projects, employees };
       console.log(data);
       localStorage.setItem('result', JSON.stringify(data));
  };

  const handleViewOutput = () => {
 
    window.location.href = '/processed-data';
  }

  const [isSplitClicked, setIsSplitClicked] = useState(false);

  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", overflow: "hidden" }}>
      <button
        onClick={goToFirstTask}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 10,
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        🔄 Quay lại Task đầu
      </button>

      <button
        onClick={async () => {
          await goSplitTasks();
          setIsSplitClicked(true);
        }}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 10,
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        🔄 Phân nhỏ thành công việc đơn vị & tìm công việc tiên quyết
      </button>
      <button
        onClick={handleViewOutput}
        disabled={!isSplitClicked}
        style={{
          position: "absolute",
          top: 100,
          right: 20,
          zIndex: 10,
          padding: "10px 15px",
          backgroundColor: isSplitClicked ? "#007bff" : "#cccccc",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: isSplitClicked ? "pointer" : "not-allowed",
        }}
      >
        Xem dữ liệu đã xử lý và lưu ra file Excel.
      </button>

      <div ref={timelineRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default TaskGantt;
