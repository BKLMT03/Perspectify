const express = require('express');
const router = express.Router();
const {getArticles} = require('../controllers/articles')

router.route('/')
    .get(getArticles)

module.exports = router;