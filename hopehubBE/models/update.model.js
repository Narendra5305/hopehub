const mongoose = require('mongoose');

const updateSchema = new mongoose.Schema({
  item: { type: String,required: true },
  location: {type: String,required: true},
  quantity: {type: String,required: true,},
  contactInfo: {type: String,required: true,},
  user: {  type: mongoose.Schema.Types.ObjectId,ref: 'User',},
  timestamp: {type: Date,default: Date.now,},
  isVerified: {type: Boolean , default: false,},
}, { timestamps: true });

const UpdateModel = mongoose.model('Update', updateSchema);

module.exports = { UpdateModel };
