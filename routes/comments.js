const express = require('express');
const router = express.Router();
const {getComments, addComment} = require('../controllers/comments')
const auth = require('../middleware/auth')

router.route('/')
    .get(auth, getComments)
    .post(auth, addComment)

module.exports = router;