const express = require('express');
const { createProject, listProjects, updateProject, deleteProject } = require('../controllers/projectController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// Route to create a new project
router.post('/', auth, createProject);

// Route to list all projects
router.get('/', auth, listProjects);

// Route to update a specific project by ID
router.put('/:projectId', auth, updateProject);

// Route to delete a specific project by ID
router.delete('/:projectId', auth, deleteProject);

module.exports = router;
