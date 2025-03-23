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
  const [taskList, setTaskList] = useState(tasks); // 🛠️ Thêm state để quản lý danh sách task

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
  }, [taskList]); // 🛠️ Cập nhật timeline khi taskList thay đổi

  // 🎯 Quay về task đầu tiên
  const goToFirstTask = () => {
    if (timelineInstance && taskList.length > 0) {
      const firstTaskStart = moment(taskList[0].startTime, "YYYY/MM/DD HH:mm").toDate();
      timelineInstance.moveTo(firstTaskStart);
    }
  };

  // 🛠️ Phân tách task
  const goSplitTasks = async () => {
    const result = await axiosInstance.post('data/split-tasks', { tasks: taskList });
    console.log(result);
    setTaskList(result.data);

  };

  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", overflow: "hidden" }}>
      {/* Nút bấm quay về task đầu */}
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
        onClick={goSplitTasks}
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
        🔄 Phân nhỏ thành công việc đơn vị
      </button>

      <div ref={timelineRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default TaskGantt;
