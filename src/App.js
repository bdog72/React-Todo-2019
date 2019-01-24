import React, { Component } from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import './App.css';
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take Out The Trash',
        completed: false
      },
      {
        id: 2,
        title: 'Wash The Dog',
        completed: false
      },
      {
        id: 3,
        title: 'Take A Shower',
        completed: false
      }
    ]
  };

  // Toggle Complete
  markComplete = id => {
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
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <Header />
          <AddTodo />
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
