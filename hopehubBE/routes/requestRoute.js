const express = require('express');
const { createRequest, getAllRequests } = require('../controllers/requestController');
const { authenticate } = require('../middleware/authMiddleware');

const RequestRouter = express.Router();

RequestRouter.post('/', authenticate, createRequest);
RequestRouter.get('/', getAllRequests);

module.exports = {RequestRouter};
