const express = require('express');
const { getUsers } = require('../controllers/users');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User')

module.exports = (app) => {

    app.post('/user/login', (req, res, next) => {
        const userToBeLoggedIn = req.body;
        const userInDB = await User.find({email: req.query.query});
        
        if(userToBeLoggedIn === userInDB) { 
            //if user log in success, generate a JWT token for the user with a secret key
            jwt.sign(loginuser, 'privatekey', { expiresIn: '1h' },(err, token) => {
                if(err) { console.log(err) }    
                res.send(token);
            });
        } else {
            console.log('ERROR: Could not log in');
        }
    })

    //This is a protected route 
    app.get('/user/data', checkToken, (req, res) => {
        //verify the JWT token generated for the user
        jwt.verify(req.token, 'privatekey', (err, authorizedData) => {
            if(err){
                //If error send Forbidden (403)
                console.log('ERROR: Could not connect to the protected route');
                res.sendStatus(403);
            } else {
                //If token is successfully verified, we can send the autorized data 
                res.json({
                    message: 'Successful log in',
                    authorizedData
                });
                console.log('SUCCESS: Connected to protected route');
            }
        })
    });

}

//Check to make sure header is not undefined, if so, return Forbidden (403)
const checkToken = (req, res, next) => {
    const header = req.headers['authorization'];

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    }
}

