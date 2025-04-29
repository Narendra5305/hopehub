const express = require('express');
const { createUpdate, getAllUpdates } = require('../controllers/updateController');
const { authenticate } = require('../middleware/authMiddleware');

const UpdateRouter = express.Router();

UpdateRouter.post('/', authenticate, createUpdate);
UpdateRouter.get('/', getAllUpdates);

module.exports = {UpdateRouter};
