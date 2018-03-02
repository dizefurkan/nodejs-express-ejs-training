var User = require('../models/Users');

module.exports.index = function(req, res) {
    res.render('Register', {
        pageTitle: 'Register'
    });
};

module.exports.submit = function(req, res) {
    if (req.body) {
        var userRegister = new User({
            name: req.body.name,
            surname: req.body.surname,
            username: req.body.username,
            password: req.body.password
        });
        
        userRegister.save(function(err) {
            if (err) {
                console.log('Hata var', err);
            }
            else {
                console.log('Register Successful');
                res.redirect('/userlist');
            }
        });
    } else {
        console.log('req.body is empty');
        res.render('Register');
    }
};