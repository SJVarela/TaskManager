import React, { Component } from "react";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import M from "materialize-css";
import tasks from "./data";

class App extends Component {
  constructor() {
    super();
    this.state = { tasks };
  }
  handleSubmit = task => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };
  handleDelete = id => {
    this.setState({ tasks: this.state.tasks.filter(task => task.id !== id) });
  };
  render() {
    return (
      <div className="container">
        <div className="fixed-action-btn">
          <button
            id="btnAdd"
            data-target="taskForm"
            className="waves-effect waves-light btn-large modal-trigger"
          >
            <i className="material-icons left">add_circle_outline</i>Add Task
          </button>
        </div>
        <div id="taskForm" className="modal">
          <div className="container valign-wrapper">
            <TaskForm onSubmit={this.handleSubmit} />
          </div>
        </div>
        <div className="row">
          <div className="col m4">
            <TaskList
              title="Planned"
              tasks={this.state.tasks.filter(
                task => task.taskState === "planned"
              )}
              onDelete={this.handleDelete}
            />
          </div>
          <div className="col m4">
            <TaskList
              title="In Progress"
              tasks={this.state.tasks.filter(
                task => task.taskState === "in progress"
              )}
              onDelete={this.handleDelete}
            />
          </div>
          <div className="col m4">
            <TaskList
              title="Finished"
              tasks={this.state.tasks.filter(
                task => task.taskState === "finished"
              )}
              onDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    M.AutoInit();
  }
}

export default App;
