import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    if (this.props.todo.completed) {
      return {
        background: "#f4f4f4",
        padding: "10px",
        borderBottom: "1px #ccc solid",
        textDecoration: "line-through"
      };
    } else {
      return {
        background: "#f8f4f4",
        padding: "10px",
        borderBottom: "1px #ccc solid",
        textDecoration: "none"
      };
    }
  };

  // another way of doing it is
  // if this.props.todo.completed is true... ":" -> else
  // return {
  //   textDecoration: this.props.todo.completed ? 'line-though' : "none"
  // }

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {"    "}
          {title}
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
