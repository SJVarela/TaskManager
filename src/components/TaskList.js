import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, title = "Test", onDelete, onEdit }) => {
  return (
    <div className="col s12 card-panel">
      <h3 className="center-align flow-text">{title}</h3>
      {tasks.map(task => (
        <Task key={task.id} {...task} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default TaskList;
