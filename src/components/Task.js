import React from "react";
import Editable from "./Editable";
import {DragSource} from "react-dnd"
const EditableP = Editable("p");
const EditableH4 = Editable("h4");
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
  const handleEdit = (value, field) => {
    console.log(field);
    onEdit({ id, title, description, estimate, taskState, [field]: value });
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="card blue hoverable">
          <div className="card-content center-align white-text">
            <EditableH4 value={title} onEdit={handleEdit} field="title" />
            <EditableP
              value={description}
              onEdit={handleEdit}
              field="description"
            />
            <p>Estimate: {estimate}hs</p>
            <p>{taskState}</p>
          </div>
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
