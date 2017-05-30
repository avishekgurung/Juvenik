/**
 * Created by avishek on 5/29/17.
 */

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config');
var mongoose = require('mongoose');

var app = express();

mongoose.connect(config.database, function(err) {
    if(err) {
        console.log('Error on database connection');
        console.log(err);
    }
    else {
        console.log('Database connected : ' + config.database);
    }
});


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

var api = require('./app/routes/api');
app.use('/api', api);

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
});

app.listen(config.port, function(err) {
    if(!err) {
        console.log('Server running @ ' + config.port);
    }
    else {
        console.log('Error in running server');
        console.log(err);
    }
})