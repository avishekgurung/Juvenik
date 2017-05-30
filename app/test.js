/**
 * Created by avishek on 5/30/17.
 */
var config = require('../config');
var mongoose = require('mongoose');

mongoose.connect(config.database, function(err) {
    if(err) {
        console.log('Error on database connection');
        console.log(err);
    }
    else {
        console.log('Database connected : ' + config.database);
    }
});

var User = require("./models/user");
/*var user = new User({
    name : 'Sam',
    email : 'test1@gmail.com',
    password : 'testme'
});

user.save(function(err) {
    if(err) {
        console.log(err);
    }
})*/

User.findOne({email : 'avishek@gmail.com'}, function(err, user) {
    console.log(user);
})

User.findOne({email : 'avishek@gmail.com'}).select('name').exec(function(err, user) {
    console.log(user);
})

User.findOne({email : 'avishek@gmail.com'}, 'name', function(err, user) {
    console.log(user);
})
