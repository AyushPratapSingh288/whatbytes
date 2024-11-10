// src/routes/taskRoutes.js
const express = require('express');
const { createTask } = require('../controllers/taskController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();
router.post('/:projectId/tasks', auth, createTask);

// Add routes for listTasks, updateTask, deleteTask

module.exports = router;
