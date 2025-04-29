const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {type: String,required: true,},
  email: {type: String,required: true,unique: true,},
  password: {type: String,required: true,minlength: 6, },
  role: {type: String,enum: ['general', 'volunteer', 'admin'],default: 'general',},
}, { timestamps: true });


const UserModel = mongoose.model('User', userSchema);

module.exports = {UserModel};
