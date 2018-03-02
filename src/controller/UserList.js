var Users = require('../models/Users');

module.exports.index = function(req, res) {
    Users.find(function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render('UserList', {
                data: data
            });
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
}}