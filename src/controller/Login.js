var jwt = require('jsonwebtoken');
var secretKey = require('../models/Config').secretKey;
var getUsernameAndPassword = require('../managers/User').getUsernameAndPassword;

module.exports.index = function(req, res) {
    res.render('Login', {
        pageTitle: 'Login'
    });
};

module.exports.submit = function(req, res) {
    var username = req.body.username, password = req.body.password;
    if (username && password) {
        var user = {
            username: username,
            password: password
        };
        var promise = getUsernameAndPassword(user);
        promise.then(function (result) {
                var token = jwt.sign({result}, secretKey);
                res.send({ result: result, token: token });
            }).catch(function (err) {
                res.send({ result: err });
            })
    } else {
        res.send('Username and password is required!');
    }
};