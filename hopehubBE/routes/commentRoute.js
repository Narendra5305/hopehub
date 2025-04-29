const express = require('express');
const { addComment, getCommentsForUpdate } = require('../controllers/commentController');
const { authenticate } = require('../middleware/authMiddleware');

const CommentRouter = express.Router();

CommentRouter.post('/', authenticate, addComment);
CommentRouter.get('/:updateId', getCommentsForUpdate);

module.exports = {CommentRouter};
