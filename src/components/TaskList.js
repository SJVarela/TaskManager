import React from "react";
import Task from "./Task";

const TaskList = ({
  tasks,
  filter,
  title = "Test",
  connectDropTarget,
  updateState
}) => {
  return (
    <div className="col s12">
      <h3>{title}</h3>
      {tasks.filter(filter).map(task => (
        <Task key={task.id} {...task} updateState={updateState} />
      ))}
    </div>
  );
};

export default TaskList;
