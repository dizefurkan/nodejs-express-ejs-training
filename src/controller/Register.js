var User = require('../models/Users');
var AddUser = require('../managers/User').addUser;

module.exports.index = function(req, res) {
    res.render('Register', {
        pageTitle: 'Register'
    });
};

module.exports.submit = function(req, res) {
    if (req.body.username && req.body.password && req.body.name && req.body.surname ) {
        var promise = AddUser(req.body);
        promise.then(function (result) {
            if (result.success) {
                res.send(result);
            } else {
                res.send(result);
            }
        })
    }
    else {
        res.render('Register');
    }
};