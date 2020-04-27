const express = require('express');

// this will automatically grab the index file from the given folder
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT);

// app.get('/api/todos', async (req, res) => {
//   const query = 'SELECT * FROM todos;';
//   try {
//     const [todos] = await connection.query(query);
//     res.status(200).json(todos);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });

// app.get('/api/todos/completed/', async (req, res) => {
//   const query = 'SELECT * FROM todos where completed = true;';
//   try {
//     const [todos] = await connection.query(query);
//     console.log(todos);
//     res.status(200).json(todos);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });

// app.get('/api/todos/incompleted/', async (req, res) => {
//   const query = 'SELECT * FROM todos where completed = false;';
//   try {
//     const [todos] = await connection.query(query);
//     console.log(todos);
//     res.status(200).json(todos);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });

// app.get('/api/todos/:id', async (req, res) => {
//   const query = 'Select * from todos where id = ?;';
//   const { id } = req.params;
//   try {
//     const [todos] = await connection.query(query, id);
//     res.status(200).json(todos[0]);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });

// // make a post request
// app.post('/api/todos/', async (req, res) => {
//   const { text } = req.body;
//   if (!text) {
//     return res.json({ error: 'You must enter a text' });
//   }
//   const query = 'Insert into todos set ?;';
//   try {
//     const [response] = await connection.query(query, { note: text });
//     const query2 = 'select * from todos where ?;';
//     const [todos] = await connection.query(query2, { id: response.insertId });
//     res.status(200).json(todos[0]);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });

// // make a delete request and also return the response after the delection
// app.delete('/api/todos/:id', async (req, res) => {
//   const { id } = req.params;
//   const query = 'delete from todos where ?;';
//   try {
//     await connection.query(query, { id });
//     const query2 = 'select * from todos;';
//     const [todos] = await connection.query(query2);
//     res.status(200).json(todos);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });


// // make a patch request
// app.patch('/api/todos/:id', async (req, res) => {
//   const { id } = req.params;
//   const { text } = req.body;
//   const query = 'update todos set ? where ?;';
//   try {
//     await connection.query(query, [{ note: text }, { id }]);
//     const getTodo = 'select * from todos where ?;';
//     const [todos] = await connection.query(getTodo, { id });
//     res.status(200).json(todos[0]);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });

// // route to update two para at once
// app.put('/api/todos/:id', async (req, res) => {
//   const { id } = req.params;
//   const { text } = req.body;
//   const getTodoById = 'SELECT * FROM todos WHERE ?;';
//   try {
//     const [todos] = await connection.query(getTodoById, { id });
//     const foundTodo = todos[0];
//     const updateTodoById = 'UPDATE todos SET ?, ? WHERE ?;';
//     await connection.query(updateTodoById, [{ note: text }, { completed: !foundTodo.completed }, { id }]);
//     const [todosUpdated] = await connection.query(getTodoById, { id });
//     res.json(todosUpdated[0]);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });

// // route to get complete and incomplete


