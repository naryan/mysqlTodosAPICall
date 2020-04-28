import React from 'react';

const RenderTodoList = props => {
  const renderTodoListItems = () => {
    if (props.items.length === 0) {
      return <h1>No todos yet</h1>;
    } else {
      return props.items.map(note => {
        return <li 
        key={note.id} 
        style={{ color: note.completed ? 'blue' : 'red' }} >{note.note}</li>
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