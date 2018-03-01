var path = require('path');

module.exports.index = function(req, res) {
    res.render('Login', {
        pageTitle: 'Login'
    });
};

module.exports.submit = function(req, res) {
    console.log(req.body);
    res.render('Login');
}