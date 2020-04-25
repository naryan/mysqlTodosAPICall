const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

// /api prepended to
router.use('/api', apiRoutes);

module.exports = router;
