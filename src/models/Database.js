var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var mongoDB = require('./Config').mongoDB;

mongoose.connect(mongoDB, function(err) {
    if (err)
        console.log('Mongoose Error:', err);
    else
        console.log('Mongoose connected', mongoDB);
});