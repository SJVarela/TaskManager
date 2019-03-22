import React from "react";
import uuid from "uuid/v4";
const TaskForm = ({ onSubmit }) => {
  let _title, _estimate, _description, form;
  const submit = event => {
    event.preventDefault();
    onSubmit({
      id: uuid(),
      title: _title.value,
      estimate: _estimate.value,
      description: _description.value,
      taskState: "planned"
    });
    form.reset();
  };
  return (
    <form className="col s12" onSubmit={submit} ref={el => (form = el)}>
      <div className="row">
        <div className="input-field col s6">
          <input
            id="title"
            required
            type="text"
            ref={input => (_title = input)}
          />
          <label htmlFor="title" className="active">
            Title
          </label>
        </div>
        <div className="input-field col s6">
          <input
            id="estimate"
            type="number"
            ref={input => (_estimate = input)}
            required
          />
          <label htmlFor="estimate" className="active">
            Estimate
          </label>
        </div>
        <div className="input-field col s12">
          <textarea
            id="description"
            className="materialize-textarea"
            data-length="120"
            ref={input => (_description = input)}
            required
          />
          <label htmlFor="description">Description</label>
        </div>
      </div>
      <div className="row">
        <button id="btnAdd" className="waves-effect waves-light btn">
          <i className="material-icons left">save</i>Save
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
