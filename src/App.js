import React, { Component } from "react";

import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Study",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Hike",
        completed: false
      }
    ]
  };

  // this id is passed from TodoItem
  markComplete = id => {
    // console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete Todo
  // the function goes: loop through the array (state) and
  // return that array without the id that was matched with
  // the id passed from the TodoItem
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  // Add Todo
  // title is passed from the component
  addTodo = title => {
    // console.log(title);
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
