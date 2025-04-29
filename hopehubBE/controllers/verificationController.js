const { VerificationModel } = require('../models/verification.model');
const { UpdateModel } = require('../models/update.model');
const { RequestModel } = require('../models/request.model');

const verifyUpdate = async (req, res) => {
  try {
    const { update, request } = req.body;

    const verification = new VerificationModel({
      update,
      request,
      user: req.user.userId
    });

    if (update) await UpdateModel.findByIdAndUpdate(update, { isVerified: true });
    if (request) await RequestModel.findByIdAndUpdate(request, { isVerified: true });

    await verification.save();
    res.status(201).json(verification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { verifyUpdate };
