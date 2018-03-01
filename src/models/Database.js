var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var mongoDB = 'mongodb://localhost/nodejs-practice-1';

mongoose.connect(mongoDB, function(err) {
    if (err)
        console.log('Mongoose', err);
    else
        console.log('Mongoose connected', mongoDB);
});