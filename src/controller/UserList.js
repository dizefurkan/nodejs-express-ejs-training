var Users = require('../models/Users');
var getAllUsers = require('../managers/User').getAllUsers;

module.exports.index = function(req, res) {
    var promise = getAllUsers();
    promise.then(function (result) {
        if (!result.success) {
            res.render('UserList', {
                data: [],
                err: result.message,
                pageTitle: 'User List'
            });
        } else {
            res.render('UserList', {
                data: result.data,
                pageTitle: 'User List'
            })
        }
    });
};

module.exports.delete = function(req, res) {
    Users.findOneAndRemove({
        _id: req.params.id
    }, function(err, results) {
        if (err) {
            console.log('Delete Error', err);
        }
        res.redirect('/userlist');
    });
};

module.exports.getUpdate = function(req, res) {
    Users.find({
        _id: req.params.id
    }, function(err, data) {
        if (err) {
            console.log('Update Error', err);
        } else {
            if (data.length) {
                var username= data[0].username;
                var user = username.toUpperCase();
                res.render('UserUpdate', {
                    pageTitle: user + ' (EDIT ACCOUNT)',
                    data: data
                });
            } else {
                console.log('User not found');
                res.redirect('/userlist');
            }
        }
    });
};

module.exports.postUpdate = function(req, res) {
    Users.findByIdAndUpdate({
        _id: req.body.id
    },
    {
        $set: {
            name: req.body.name,
            surname: req.body.surname,
            username: req.body.username,
            password: req.body.password
        }
    },
    {upsert: true, new: true },
    function(err, data) {
        if (err) {
            if (err.codeName === 'DuplicateKey') {
                res.status(500).send('postUpdate Error: ' + err.codeName);
            }
            console.log('postUpdate Error: ' + err.codeName);
        } else {
            res.status(200).send('Update is Successful');
            console.log('Update is Successful');
            res.redirect('/userlist');
        }
    })
};

module.exports.redirecttoindex = function(req, res) {
    res.redirect('/userlist');
};