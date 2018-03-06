var jwt = require('jsonwebtoken');
var Users = require('../models/Users');
var secretKey = require('../models/Config').secretKey;

module.exports.getUserByNameAndPassword = function(user) {
    return Users.findOne({
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
                var token = jwt.sign({result}, secretKey);
                return {
                    success: true,
                    message: 'User Found',
                    token: token
                }
            }
        }
    })
};

module.exports.getAllUsers = function () {
    return Users.find().then(function (result) {
        if (!result) {
            return {
                success: false,
                message: 'Error'
            }
        } else {
            if (result.length) {
                return {
                    success: true,
                    message: 'User List',
                    data: result
                }
            } else {
                return {
                    success: false,
                    message: 'No User on Database'
                }
            }
        }
    })
};

module.exports.addUser = function(user) {
    return  Users.findOne({ username: user.username }).then(function (err) {
        if (err) {
            return { success: false, message: 'This Username Is Already Have', username: user.username }
        } else {
            return Users.create(user).then(function (res) {
                if (res) {
                    return { success: true, message: 'Register Successful', user: res, };
                }
            })
        }
    });
}