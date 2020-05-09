import React, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

class Note extends Component {
  render() {
    return (
      <div className="note">
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
        <button onClick={() => this.props.onDelete(this.props.id)}>
          <DeleteIcon />
        </button>
      </div>
    );
  }
}
export default Note;
