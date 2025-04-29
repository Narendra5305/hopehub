const mongoose = require('mongoose');

const shelterSchema = new mongoose.Schema({
  name: {type: String},
  address: {type: String},
  capacity: {type: Number},
  contactInfo: {type: String},
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  timestamp: { type: Date, default: Date.now }
});


const ShelterModel =mongoose.model('Shelter', shelterSchema);

module.exports = {ShelterModel};
