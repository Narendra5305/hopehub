const express = require('express');
const { verifyUpdate } = require('../controllers/verificationController');
const { authenticate } = require('../middleware/authMiddleware');

const VerificationRouter = express.Router();

VerificationRouter.post('/', authenticate, verifyUpdate);

module.exports = {VerificationRouter};
