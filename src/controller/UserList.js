var Users = require('../models/Users');

module.exports.index = function(req, res) {
    Users.find(function(err, data) {
        if (err) {
            console.log(err);
        } else {
            if (data.length) {
                res.render('UserList', {
                    data: data,
                    err: ''
                });
            } else {
                res.render('UserList', {
                    data: [],
                    error: 'No Record on MongoDB'
                })
            }
        }
    });
};

module.exports.delete = function(req, res) {{
    Users.findOneAndRemove({
        username: req.params.username
    }, function(err, results) {
        if (err) {
            console.log('Delete Error', err);
        }
        res.redirect('/userlist');
    });
}};

module.exports.getUpdate = function(req, res) {
    var username = req.params.username;
    Users.find({
        username: username
    }, function(err, data) {
        if (err) {
            console.log('Update Error', err);
        } else {
            if (data.length) {
                res.render('UserUpdate', {
                    pageTitle: 'User Update |', username,
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
    Users.findOneAndUpdate({
        username: req.body.username
    },
    {
        $set: {
            name: req.body.name,
            surname: req.body.surname,
            username: req.body.username,
            password: req.body.password
        }
    },
    {new: true},
    function(err, data) {
        if (err) {
            console.log('postUpdate Error', err);
        } else {
            res.redirect('/userlist');
        }
    })
};