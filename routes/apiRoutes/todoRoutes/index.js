const router = require('express').Router();
const todosController = require('../../../controllers/todoController');
// /api/todo prepend to every route

router.route('/')
  .get(todosController.getAllTodos)
  .post(todosController.addTodo);

router.route('/:id')
  .get(todosController.getTodoById)
  .delete(todosController.deleteTodoById)
  .patch(todosController.updateTodoById);

module.exports = router;
