const { CommentModel } = require('../models/comment.model');

const addComment = async (req, res) => {
  try {
    const comment = new CommentModel({
      text: req.body.text,
      update: req.body.update,
      user: req.user.userId
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCommentsForUpdate = async (req, res) => {
  try {
    const comments = await CommentModel.find({ update: req.params.updateId })
      .populate('user', 'name');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addComment, getCommentsForUpdate };
