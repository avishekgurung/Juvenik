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

module.exports = api;