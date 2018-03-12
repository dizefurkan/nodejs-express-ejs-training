var jwt = require('jsonwebtoken');
var Users = require('../models/Users');
var secretKey = require('../models/Config').secretKey;

module.exports.getUsernameAndPassword = function(user, haveToken) {
    return new Promise(function (resolve, reject) {
        Users.findOne({
            username: user.username
        }).then(function (res) {
            if (!res) {
                reject({ success: false, message: 'No User' });
            } else if (res.password !== user.password) {
                reject({ success: false, message: 'Wrong Password' });
            } else {
                resolve({ success: true, message: 'User Found'});
            }
        }).catch(function (err) {
            reject({ success: false, error: err });
        })
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