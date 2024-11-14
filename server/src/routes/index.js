const express = require ('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const taskRoutes = require('../routes/taskRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/task', taskRoutes);

module.exports = router;