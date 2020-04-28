const router = require('express').Router();
const todoRoutes = require('./todoRoutes');

// / prepended to every route /api
router.use('/todos', todoRoutes);

module.exports = router;
