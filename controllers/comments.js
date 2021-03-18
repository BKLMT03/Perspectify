const Comment = require('../models/Comment')

exports.getComments = async (req, res, next) => {
    const {topic} = req.body;
    try {
        const comments = await Comment.find({topic: topic})
        return res.status(200).json({
            success: true,
            count: comments.length,
            data: comments
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server error"
        })
    }
}

exports.addComment = async (req, res, next) => {
    try {
        const {topic, name_first, name_last, text} = req.body;
        const comment = await Comment.create(req.body)

        return res.status(201).json({
            success: true,
            data: comment
    })
    } catch (error) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message)
            return res.status(400).json({
                success: false,
                error: messages
            }) 
        } else {
            return res.status(500).json({
                success: false,
                error: "Server error"
            })
        }
    }
}