const mongoose = require('mongoose');

const verificationSchema = new mongoose.Schema({
  update: {type: mongoose.Schema.Types.ObjectId,ref: 'Update',required: true,},
  request: {type: mongoose.Schema.Types.ObjectId,ref: 'Request',required: false,},
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true,},
  verifiedAt: {type: Date,default: Date.now,}
}, { timestamps: true });


const VerificationModel = mongoose.model('Verification', verificationSchema);

module.exports = {VerificationModel};
