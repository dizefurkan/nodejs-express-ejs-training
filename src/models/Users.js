var mongoose = require('mongoose');
var collection = 'users';

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {collection: collection});

var User = mongoose.model(collection, UserSchema);

module.exports = User;