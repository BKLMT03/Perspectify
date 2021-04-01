const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        trim: true,
        required: true
    },
    last_name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    register_date: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
        trim: true,
    },
    articles_read: {
        type: Number
    },
    read_activity: {
        type: Array,
        default: []
    },
    saved_articles:{
        type: Array,
        default: []
    },
    user_score :{
        superLeft: {
            type: Number
        },
        midLeft: {
            type: Number
        },
        center: {
            type: Number
        },
        midRight: {
            type: Number
        },
        superRight: {
            type: Number
        },
    }
})

module.exports = mongoose.model('User', UserSchema)