import React, { Component } from 'react';
import axios from 'axios';

import RenderTodoList from '../../components/renderTodoList';

class TodoForm extends Component {
  state = {
    todos: [],
    todoInput: ''
  }

  async componentDidMount() {
    console.log("Inside componentDidMount");
    try {
      const { data } = await axios.get('/api/todos');
      this.setState({ todos: data });
    } catch (e) {
      console.log(e);
    }
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  handleSubmit = async event => {
    event.preventDefault();
    try {
      const { data } = await axios.post('/api/todos', {note: this.state.todoInput });
      const todos = [...this.state.todos, data];
      this.setState({ todos, todoInput: '' });
    } catch (e) {
      console.log(e);
    }
  }
  handleDelete = async id => {
    try{
      const {data} = await axios.delete(`/api/todos/${id}`);
      console.log({data});
      this.setState({todos:data});
    }
    catch(e){
      console.log(e);
    }
  }
  handleUpdate = async id => {
    try{
      const {data} = await axios.patch(`/api/todos/${id}`);
      console.log({data});
      this.setState({todos:data});
    }
    catch(e){
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <RenderTodoList 
        items={this.state.todos}
        handleDelete = {this.handleDelete}
        handleUpdate = {this.handleUpdate}/>
        <form>
          <input
            name="todoInput"
            value={this.state.todoInput}
            onChange={this.handleInputChange}
          />
          <button onClick={(e) => this.handleSubmit(e)}>Add todo</button>
        </form>
      </div>
    );
  }
}
export default TodoForm;