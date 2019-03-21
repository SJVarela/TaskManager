import React from "react";
import Task from "./Task";
import { DropTarget } from "react-dnd";

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const squareTarget = {
  drop(props) {
    return props;
  }
};
const TaskList = ({
  tasks,
  filter,
  title = "Test",
  connectDropTarget,
  updateState
}) => {
  return connectDropTarget(
    <div className="col s12">
      <h3>{title}</h3>
      {tasks.filter(filter).map(task => (
        <Task key={task.id} {...task} updateState={updateState} />
      ))}
    </div>
  );
};

export default DropTarget("Task", squareTarget, collect)(TaskList);
