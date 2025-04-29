const { RequestModel } = require('../models/request.model');

const createRequest = async (req, res) => {
  try {
    const request = new RequestModel({ ...req.body, user: req.user.userId });
    await request.save();
    res.status(201).json(request);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllRequests = async (req, res) => {
  try {
    const requests = await RequestModel.find().populate('user', 'name');
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createRequest, getAllRequests };
