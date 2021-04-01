const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')

//validate user
exports.checkAuth = async (req, res, next) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
}

exports.authUser = async (req, res, next) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({
            msg: "Please enter all fields!"
        })
    }

    User.findOne({email})
    .then(user => {
        if(!user) return res.status(400).json({msg: "User does not exist"})
        
        
        //validate password
        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(!isMatch) return res.status(400).json({msg: "Invalid credentials"})

            jwt.sign(
                {id: user.id},
                process.env.jwtSecret,
                {expiresIn: 3600 },
                (err, token) => {
                    if(err) throw err;
                    
                    res.json({
                        user: {
                            token,
                            id: user.id,
                            name: user.first_name + " " + user.last_name,
                            email: user.email
                        }
                    })
                }
            )
        })
    })


}
