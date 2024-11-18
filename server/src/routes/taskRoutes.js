const express = require ('express');
const router = express.Router();
const taskController = require('../controllers/taskController')
const authMiddleware = require('../middlewares/authMiddleware')

router.get('/:projectId', authMiddleware, taskController.getTasksByProject)
router.post('/:projectId', authMiddleware, taskController.createTask);
router.put('/:taskId', authMiddleware, taskController.updateTask);

module.exports = router;