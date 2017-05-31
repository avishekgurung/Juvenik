/**
 * Created by avishek on 5/29/17.
 */

var User = require('../models/user');
var config = require('../../config');
var secretKey = config.secretKey;
var express = require('express');
var jsonwebtoken = require('jsonwebtoken');

function createToken(user) {
    var token = jsonwebtoken.sign({
        _id: user._id,
        name: user.name,
        email: user.email
    }, secretKey, {
        expiresIn: 60 * 60 //one hour duration
    });
    return token;
}

//User signing up
var api = express.Router();
api.post('/signup', function(req, res) {
    var user = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    });

    user.save(function(err) {
        if(err) {
            res.send(err);
            return;
        }
        res.json({"message" : "User created"});
    })
});

api.get('/users', function(req, res) {
    User.find({}, function(err, users) {
        if(err) {
            res.send(err);
            return;
        }
        res.json(users);
    });
});

//User loggin into the app
api.post('/login', function(req, res) {
    User.findOne({email : req.body.email}, 'password', function(err, user) {
        if(err) {
            throw err;
        }
        if(!user) {
            res.send({'message' : 'user does not exists'});
            return;
        }
        var validPassword = user.comparePassword(req.body.password);
        if(!validPassword) {
            res.send({'message' : 'Password does not match'});
            return;
        }
        var token = createToken(user);
        res.json({
            success : true,
            message : 'Successful login',
            token : token
        })
    })
})

/*
 maintaining the session for the user. So all the request coming to api will land here, except the above request since they
 do not use next() so it will not land here. Except that, all other request will come here. So this is a gateway for all the
 request.
 */
api.use(function(req, res, next) {
    console.log('Somebody just came into our app');
    var token = req.body.token || req.param('token') || req.headers['x-access-token'];
    if(token) {
        jsonwebtoken.verify(token, secretKey, function (err, decoded) {
            if(err) {
                res.status(403).send({success : false, message : 'Failed to authenticate user'});
            }
            else {
                req.decoded = decoded;
                //this will store the current user _id information as this is
                // the fields that are used in createToken method. So now, all the middlewares that comes after this
                //middleware will have user information stored in req.decoded
                next();
            }
        })
    }
    else {
        res.status(403).send({success : false, message : 'No token provided'});
    }
})

api.get('/', function(req, res) {
    res.json("Logged in as " + req.decoded);
})

module.exports = api;