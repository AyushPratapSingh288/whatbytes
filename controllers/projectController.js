const prisma = require('../models/prismaClient');

// Create a new project
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

// List all projects for a user
exports.listProjects = async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      where: { userId: req.user.id },
    });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve projects' });
  }
};

// Update a specific project by ID
exports.updateProject = async (req, res) => {
  const { projectId } = req.params;
  try {
    const updatedProject = await prisma.project.update({
      where: { 
        id: parseInt(projectId, 10),
        userId: req.user.id,
      },
      data: req.body,
    });
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update project' });
  }
};

// Delete a specific project by ID
exports.deleteProject = async (req, res) => {
  const { projectId } = req.params;
  try {
    await prisma.project.delete({
      where: { 
        id: parseInt(projectId, 10),
        userId: req.user.id,
      },
    });
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete project' });
  }
};
