const express = require('express');
const router = express.Router();
const { authUser, checkAuth } = require('../controllers/auth')
const auth = require('../middleware/auth')

router.route('/')
            .post(authUser)
            .get(auth, checkAuth)
module.exports = router