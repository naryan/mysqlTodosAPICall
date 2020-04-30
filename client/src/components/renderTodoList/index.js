import React from 'react';
import { Link } from 'react-router-dom';


const RenderTodoList = props => {
  const renderTodoListItems = () => {
    if (props.items.length === 0) {
      return <h1>No todos yet</h1>;
    } else {
      return props.items.map(note => {
        return (
        <div key={note.id} >
          <Link to={`/todos/${note.id}`}><li style={{ color: note.completed ? 'blue' : 'red' }} >{note.note}</li></Link>
          <button onClick= { () => props.handleDelete(note.id)}> Delete </button>
          <button onClick = { () => props.handleUpdateCompleted(note.id)}>Update </button>
        </div>
        )
      });
    }
  }

  return (
    <ul>
      { renderTodoListItems() }
    </ul>
  );
};
export default RenderTodoList;