const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  item: { type: String},
  location: { type: String},
  urgencyLevel: { type: String,  enum: ['Low', 'Medium', 'High'] },
  contactInfo: { type: String},
  user: {  type: mongoose.Schema.Types.ObjectId,  ref: 'User' },
  timestamp: {  type: Date, default: Date.now },
  isVerified: {type: Boolean,default: false}
});


const RequestModel = mongoose.model('Request', requestSchema);
module.exports = { RequestModel };
