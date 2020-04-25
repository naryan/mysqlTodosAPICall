const router = require('express').Router();
const todoRoutes = require('./todoRoutes');

// / prepended to every route
router.use('/todos', todoRoutes);

module.exports = router;
