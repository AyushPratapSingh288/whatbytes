// src/routes/userRoutes.js
const express = require('express');
const { createUser } = require('../controllers/userController');

const router = express.Router();
router.post('/', createUser);

// Add routes for listUsers, updateUser, deleteUser

module.exports = router;
