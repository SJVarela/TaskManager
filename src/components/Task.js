import React from "react";

const Task = ({
  id,
  title,
  description,
  estimate,
  taskState = "planned",
  onEdit,
  onDelete
}) => {
  const handleDelete = () => {
    onDelete(id);
  };
  const handleEdit = () => {};
  return (
    <div className="row">
      <div className="col s12">
        <div className="card blue hoverable">
          <div className="card-content center-align white-text">
            <h4>{title}</h4>
            <p>{description}</p>
            <p>Estimate: {estimate}hs</p>
            <p>{taskState}</p>
          </div>
          <button
            className="btn-floating btn-large waves-effect waves-light green"
            onClick={handleEdit}
          >
            <i className="material-icons">edit</i>
          </button>
          <button
            className="btn-floating btn-large waves-effect waves-light red"
            onClick={handleDelete}
          >
            <i className="material-icons">delete</i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Task;
