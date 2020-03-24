import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    // console.log(this.props.todos);
    return this.props.todos.map(td => (
      <TodoItem key={td.id} todo={td} markComplete={this.props.markComplete} />
    ));
  }
}

// validation for properties that component should have
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
