import React from 'react';

import Counter from '../../containers/counter';
import TodoForm from '../../containers/todoForm';

const App = () => {
  return (
    <>
      <Counter/>
      <TodoForm/>
    </>
  );
};
export default App;


// import React, { Component } from 'react';
// import axios from 'axios';
// import Counter from './counter';
// import TodoForm from './../components/todoForm';

// // const App = (props) =>{
// //   return (
// //   <div className = "colorBlue">
// //     <p>My name is Narayan</p>
// //   </div>
// //   );
// // }

// class App extends Component {
//   state = {
//     todos: [],
//     todoInput: '',
//     // todoInput2: ''
//   }


//   async componentDidMount(){
//     console.log("This is insidee component Did Mount")
//     try{
//       const { data } = await axios.get('/api/todos');
//       this.setState({todos:data })
//       console.log(data);
//     }catch(e){
//       console.log(e);
//     }
//   }

//   handeInputChange = (event) => {
//     const {name, value} = event.target;
//     this.setState({[name]:value});
//     // this.setState({todoInput: event.target.value});
//   }

//   handleSubmit = async event => {
//     event.preventDefault();
//     try{
//       const { data } = await axios.post('/api/todos', {note: this.state.todoInput});
//       console.log(data);
//       const todos = [...this.state.todos, data];
//       this.setState({todos, todoInput:''});
//     }
//     catch (e){
//       console.log(e);
//     }
//   }
//   renderTodos = () => {
//     if(this.state.todos.length === 0){
//       return <h1>No todos yet</h1>
//     }
//     else{
//       return(
//         <ul>
//           {
//             this.state.todos.map(note => {
//             return <li 
//             key={note.id}
//             style = {{ color : note.completed ? 'blue': 'red'}}> 
//             {note.note}
//             </li>
//             })
//           }
//         </ul>

//       );
//     }
//   }
//   render() {
//     return (
//       <div>
//         <Counter
//           counter= {this.state.counter} 
//           handleIncrement = {this.handleIncrement} 
//           handleDecrement = {this.handleDecrement}
//         />
//         {this.renderTodos()}
//         <TodoForm
//           todoInput = {this.state.todoInput}
//           handeInputChange = {this.handeInputChange}
//           handleSubmit = {this.handleSubmit}
//         />
//       </div>
//     );
//   }
// }
// export default App;
