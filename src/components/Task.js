import React from "react";
import { DragSource } from "react-dnd";

const taskSource = {
  beginDrag(props) {
    return props;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    // When dropped on a compatible target, do something
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    const newTasks = dropResult.tasks.map(task =>
      task.id === item.id
        ? { ...task, taskState: dropResult.title.toLowerCase() }
        : task
    );
    props.updateState(newTasks);
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const Task = ({
  title,
  description,
  estimate,
  taskState = "planned",
  updateState,
  connectDragSource
}) => {
  return connectDragSource(
    <div className="row">
      <div className="col s12">
        <div className="card blue">
          <div className="card-content  white-text">
            <span className="card-title">{title}</span>
            <p>{description}</p>
            <p>{estimate}</p>
            <p>{taskState}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DragSource("Task", taskSource, collect)(Task);
