var jwt = require('jsonwebtoken');
var Users = require('../models/Users');

module.exports.getUserByNameAndPassword = function(user) {
    return Users.find({
        username: user.username
    }).then(function (result) {
        if (!result) {
            return { 
                success: false,
                message: 'User not found by this name'
            }
        } else {
            if ( user.password != result.password ) {
                return {
                    success: false,
                    message: 'Wrong Password'
                }
            } else {
                return {
                    success: true,
                    message: 'User Found'
                }
            }
        }
    })
};