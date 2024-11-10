// src/controllers/projectController.js
const prisma = require('../models/prismaClient');

exports.createProject = async (req, res) => {
  try {
    const project = await prisma.project.create({
      data: {
        ...req.body,
        userId: req.user.id, // Assumes user ID is available in request (JWT auth)
      },
    });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create project' });
  }
};
