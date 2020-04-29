const findAllTodos = 'select * from todos;';
const findAllCompleted = 'select * from todos where completed = true;';
const findAllIncomplete = 'select * from todos where completed = false;';
const findTodoById = 'select * from todos where id = ?;';

const addTodo = 'insert into todos set ?;';

const deleteTodoById = 'delete from todos where id = ?;';

const updateTodoNoteById = 'update todos set note = ? where id = ?;';

const updateTodoById = 'update todos set completed = ? where id = ?;';

module.exports = {
  findAllTodos,
  findAllCompleted,
  findAllIncomplete,
  findTodoById,
  addTodo,
  deleteTodoById,
  updateTodoNoteById,
  updateTodoById,
};
