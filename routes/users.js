const express = require('express');
const router = express.Router();
const {getUsers, addUser} = require('../controllers/users')

router.route('/')
    .get(getUsers)
    .post(addUser)

module.exports = router;