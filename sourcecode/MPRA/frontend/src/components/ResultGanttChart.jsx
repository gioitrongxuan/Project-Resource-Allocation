

import React, { useEffect, useRef, useState } from "react";
import { Timeline } from "vis-timeline/standalone";
import "vis-timeline/styles/vis-timeline-graph2d.min.css";
import moment from "moment";
// import { projects } from "../../../data/input/projects_result";
const projects = [];
const ResultGanttChart = () => {
  const timelineRef = useRef(null);
  const [timelineInstance, setTimelineInstance] = useState(null);

  const getColorByProjectId = (projectId) => {
    const colors = {
      "1": "#FF5733",
      "2": "#33FF57",
      "3": "#3357FF",
      "4": "#FFC300",
      "5": "#9b59b6",
    };
    return colors[projectId] || "#CCCCCC";
  };

  useEffect(() => {
    if (!timelineRef.current || !projects || projects.length === 0) return;

    const container = timelineRef.current;

    const allTasks = projects.flatMap(proj =>
      proj.tasks.map((task, idx) => ({
        ...task,
        projectId: proj.id,
        color: getColorByProjectId(proj.id)
      }))
    );

    const assignees = [...new Set(allTasks.map(task => task.assignee || "Không xác định"))];

    const groups = assignees.map((assignee, index) => ({
      id: index + 1,
      content: assignee,
    }));

    const items = allTasks.map((task, index) => ({
      id: index + 1,
      group: assignees.indexOf(task.assignee || "Không xác định") + 1,
      content: task.name || `Task ${index + 1}`,
      start: new Date(task.startTime),
      end: new Date(task.endTime),
      style: `background-color: ${task.color}`,
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

    const timeline = new Timeline(container, items, groups, options);
    setTimelineInstance(timeline);

    window.addEventListener("resize", () => timeline.fit());
    return () => {
      timeline.destroy();
      window.removeEventListener("resize", () => timeline.fit());
    };
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div ref={timelineRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};
export default ResultGanttChart;