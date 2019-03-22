import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, title = "Test", onDelete }) => {
  return (
    <div className="col s12 card-panel">
      <h3 className="center-align flow-text">{title}</h3>
      {tasks.map(task => (
        <Task key={task.id} {...task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
