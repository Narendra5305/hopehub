const { UpdateModel } = require('../models/update.model');

const createUpdate = async (req, res) => {
  try {
    const update = new UpdateModel({ ...req.body, user: req.user.userId });
    await update.save();
    res.status(201).json(update);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const getAllUpdates = async (req, res) => {
  try {
    const updates = await UpdateModel.find().populate('user', 'name email');
    res.json(updates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = { createUpdate, getAllUpdates };
