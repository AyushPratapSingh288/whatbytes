// src/controllers/userController.js
const prisma = require('../models/prismaClient');

exports.createUser = async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: req.body,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};

// Implement other user functions here: updateUser, deleteUser, listUsers
