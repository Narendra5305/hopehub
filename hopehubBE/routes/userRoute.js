const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');

const UserRouter = express.Router();

UserRouter.post('/register', registerUser);
UserRouter.post('/login', loginUser);

module.exports = {UserRouter};
