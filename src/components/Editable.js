import React, { Component } from "react";
export default function Editable(Wrapped) {
  return class extends Component {
    // constructor(props) {
    //   super(props);
    // }
    state = {
      editing: false
    };
    edit = () => {
      this.setState({ editing: true });
    };
    save = e => {
      this.setState({ editing: false });
      this.props.onEdit(
        e.target.value ? e.target.value : "Empty",
        this.props.field
      );
    };
    render() {
      return this.state.editing ? (
        <div className="input-field">
          <input
            onBlur={this.save}
            defaultValue={this.props.value}
            autoFocus={true}
          />
        </div>
      ) : (
        <Wrapped className="" onClick={this.edit} {...this.props}>
          {this.props.value}
        </Wrapped>
      );
    }
  };
}
