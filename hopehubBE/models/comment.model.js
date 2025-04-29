const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true},
  update: {type: mongoose.Schema.Types.ObjectId,ref: 'Update',required: true,},
  user: {type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true,},
}, { timestamps: true });


const CommentModel = mongoose.model('Comment', commentSchema);

module.exports = {CommentModel};
