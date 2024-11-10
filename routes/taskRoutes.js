const express = require('express');
const { createTask, listTasks, updateTask, deleteTask } = require('../controllers/taskController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// Route to create a new task within a project
router.post('/:projectId/tasks', auth, createTask);

// Route to list all tasks within a project
router.get('/:projectId/tasks', auth, listTasks);

// Route to update a specific task by ID within a project
router.put('/:projectId/tasks/:taskId', auth, updateTask);

// Route to delete a specific task by ID within a project
router.delete('/:projectId/tasks/:taskId', auth, deleteTask);

module.exports = router;
