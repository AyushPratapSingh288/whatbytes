// src/controllers/taskController.js
const prisma = require('../models/prismaClient');

exports.createTask = async (req, res) => {
  try {
    const task = await prisma.task.create({
      data: {
        ...req.body,
        projectId: req.params.projectId,
        assignedUserId: req.body.assignedUserId,
      },
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};
