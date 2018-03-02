var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var collection = 'users';

var UserSchema = new Schema({
    name: String,
    surname: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {collection: collection});

var User = mongoose.model(collection, UserSchema);

module.exports = User;