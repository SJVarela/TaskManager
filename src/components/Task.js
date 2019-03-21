import React from "react";

const Task = ({
  title,
  description,
  estimate,
  taskState = "planned",
  updateState,
  connectDragSource
}) => {
  return (
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
export default Task;
