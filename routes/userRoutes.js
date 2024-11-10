const express = require('express');
const { createUser, listUsers, updateUser, deleteUser } = require('../controllers/userController');

const router = express.Router();

// Route to create a new user
router.post('/', createUser);

// Route to list all users
router.get('/', listUsers);

// Route to update a user by ID
router.put('/:id', updateUser);

// Route to delete a user by ID
router.delete('/:id', deleteUser);

module.exports = router;
