const express = require ('express');
const router = express.Router();
const projectController = require('../controllers/projectController')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/createProject', authMiddleware, projectController.newProject);
router.put('/update/:id', authMiddleware, projectController.updateProject);
// router.get('/project/:id', userController.getProfile);

module.exports = router;