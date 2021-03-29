const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    topic: {
        type: String,
        trim: true,
        required: true
    },
    name_first: {
        type: String,
        trim: true,
        required: true,
    },
    name_last: {
        type: String,
        trim: true,
        required: true,
    },
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    url: {
        type: String, 
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Comment', CommentSchema)