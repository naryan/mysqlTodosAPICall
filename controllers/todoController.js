const connection = require("../config/connection");
const todoQueries = require("../models/todos/todoQueries");

module.exports = {
  getAllTodos: async (req, res) => {
    try {
      const [todos] = await connection.query(todoQueries.findAllTodos);
      return res.status(200).json(todos);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  addTodo: async (req, res) => {
    const { note } = req.body;
    if (!note) {
      return res.json({ error: 'You must enter a text' });
    }
    try {
      const [response] = await connection.query(todoQueries.addTodo, {
        note,
      });
      const [todos] = await connection.query(
        todoQueries.findTodoById,
        response.insertId,
      );
      res.status(200).json(todos[0]);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getTodoById: async (req, res) => {
    const { id } = req.params;
    try {
      const [todos] = await connection.query(todoQueries.findTodoById, id);
      res.status(200).json(todos[0]);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  deleteTodoById: async (req, res) => {
    const { id } = req.params;
    try {
      await connection.query(todoQueries.deleteTodoById, id);
      const [todos] = await connection.query(todoQueries.findAllTodos);
      res.status(200).json(todos);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  updateTodoCompletedById: async (req, res) => {
    const { id } = req.params;
    try {
      const [todos] = await connection.query(todoQueries.findTodoById, id);
      const foundTodo = todos[0];
      await connection.query(todoQueries.updateTodoById, [!foundTodo.completed, id]);
      const [updatedTodos] = await connection.query(todoQueries.findAllTodos);
      res.status(200).json(updatedTodos);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
};
