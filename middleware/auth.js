const jwt = require('jsonwebtoken')

function auth (req, res, next) {
    const token = req.header("x-auth-token");

    //check for token
    if(!token) return res.status(401).json({msg: "No token, authorization rejected!"})

    try {
        //verify token
    const decoded = jwt.verify(token, process.env.jwtSecret);
    //add user from payload
    req.user = decoded;
    next();
    } catch (error) {
        res.status(400).json({msg: "Token invalid"})
    }
    
}

module.exports = auth;