const prisma = require('../models/prismaClient');

// Create a new task within a project
exports.createTask = async (req, res) => {
  try {
    const task = await prisma.task.create({
      data: {
        ...req.body,
        projectId: parseInt(req.params.projectId, 10),
        assignedUserId: req.body.assignedUserId,
      },
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};

// Here list all tasks with optional filtering by status and assigned user
exports.listFilteredTasks = async (req, res) => {
  const { status, assignedUserId } = req.query; 
  const filters = {};

  if (status) filters.status = status;
  if (assignedUserId) filters.assignedUserId = assignedUserId;

  try {
    const tasks = await prisma.task.findMany({
      where: filters,
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve tasks' });
  }
};

// Here tasks for a specific project with optional status filter
exports.listProjectTasks = async (req, res) => {
  const { projectId } = req.params;
  const { status } = req.query; 

  try {
    const tasks = await prisma.task.findMany({
      where: {
        projectId: parseInt(projectId, 10),
        ...(status && { status }), 
      },
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve project tasks' });
  }
};
