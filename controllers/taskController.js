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

// List all tasks within a specific project
exports.listTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      where: { projectId: parseInt(req.params.projectId, 10) },
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve tasks' });
  }
};

// Update a specific task by ID within a project
exports.updateTask = async (req, res) => {
  const { projectId, taskId } = req.params;
  try {
    const updatedTask = await prisma.task.update({
      where: { 
        id: parseInt(taskId, 10),
        projectId: parseInt(projectId, 10),
      },
      data: req.body,
    });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};

// Delete a specific task by ID within a project
exports.deleteTask = async (req, res) => {
  const { projectId, taskId } = req.params;
  try {
    await prisma.task.delete({
      where: { 
        id: parseInt(taskId, 10),
        projectId: parseInt(projectId, 10),
      },
    });
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};
