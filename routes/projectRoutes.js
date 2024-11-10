// src/routes/projectRoutes.js
const express = require('express');
const { createProject } = require('../controllers/projectController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();
router.post('/', auth, createProject);

// Add routes for listProjects, updateProject, deleteProject

module.exports = router;
