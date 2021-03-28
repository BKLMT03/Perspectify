const User = require('../models/User')

exports.getUsers = async (req, res, next) => {
    const query = req.query;
    console.log(query)
    try {
        const user = await User.find(query);
        return res.status(200).json({
            success: true,
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server error"
        })
    }
}

exports.addUser = async (req, res, next) => {
    const findUser = await User.find({email: req.body.email}, (err, user) => {
        if (user.length) {
            res.json({
                message: "Email is already registered"
            })
        } else {
            try {
                const {first_name, last_name, email, password, image} = req.body;
                const user = User.create(req.body);
                return res.status(201).json({
                    success: true,
                    data: user
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
    });
}