const { ShelterModel } = require('../models/shelter.model');

const createShelter = async (req, res) => {
  try {
    const shelter = new ShelterModel({ ...req.body, user: req.user.userId });
    await shelter.save();
    res.status(201).json(shelter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllShelters = async (req, res) => {
  try {
    const shelters = await ShelterModel.find().populate('user', 'name');
    res.json(shelters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createShelter, getAllShelters };
