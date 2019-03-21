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
  updateState = newTasks => this.setState({ tasks: newTasks });
  render() {
    return (
      <div className="container">
        <TaskForm />
        <div className="row">
          <div className="col m4">
            <TaskList
              title="Planned"
              tasks={this.state.tasks}
              filter={task => task.taskState === "planned"}
              updateState={this.updateState}
            />
          </div>
          <div className="col m4">
            <TaskList
              title="In Progress"
              tasks={this.state.tasks}
              filter={task => task.taskState === "in progress"}
              updateState={this.updateState}
            />
          </div>
          <div className="col m4">
            <TaskList
              title="Finished"
              tasks={this.state.tasks}
              filter={task => task.taskState === "finished"}
              updateState={this.updateState}
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
