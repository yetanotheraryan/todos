import React, { Component } from 'react';
import Todos from './todos'
import AddTodo from './addForm'
class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario cart'}
    ]
  }
  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo=>{
      return todo.id !== id
    })
    this.setState({
      // since key and value have the same name, instead of todos: todos
      todos
    })
  }
  addTodo = (todo) =>{
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
}
}

export default App;
