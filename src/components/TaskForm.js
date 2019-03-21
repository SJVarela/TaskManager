import React from "react";

const TaskForm = () => {
  return (
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input id="title" type="text" />
          <label htmlFor="title" className="active">
            Title
          </label>
        </div>
        <div className="input-field col s6">
          <input id="estimate" type="number" />
          <label htmlFor="estimate" className="active">
            Estimate
          </label>
        </div>
        <div className="input-field col s12">
          <textarea
            id="description"
            className="materialize-textarea"
            data-length="120"
          />
          <label htmlFor="description">Description</label>
        </div>
      </div>
      <div className="row">
        <div id="btnAdd" className="waves-effect waves-light btn">
          <i className="material-icons left">add_circle_outline</i>Add Task
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
