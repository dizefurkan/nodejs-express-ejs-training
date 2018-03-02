var Users = require('../models/Users');

module.exports.index = function(req, res) {
    Users.find(function(err, data) {
        if (err) {
            console.log(err);
        } else {
            if (data.length) {
                res.render('UserList', {
                    data: data,
                    err: '',
                    pageTitle: 'User List'
                });
            } else {
                res.render('UserList', {
                    data: [],
                    error: 'No Record on MongoDB',
                    pageTitle: 'User List'
                });
            }
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
            console.log('postUpdate Error', err);
        } else {
            console.log('Basarili');
            res.redirect('/userlist');
        }
    })
};

module.exports.redirecttoindex = function(req, res) {
    res.redirect('/userlist');
};