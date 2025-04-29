const express = require('express');
const { createShelter, getAllShelters } = require('../controllers/shelterController');
const { authenticate } = require('../middleware/authMiddleware');

const ShelterRouter = express.Router();

ShelterRouter.post('/', authenticate, createShelter);
ShelterRouter.get('/', getAllShelters);

module.exports = {ShelterRouter};
