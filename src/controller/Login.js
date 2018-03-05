var LoginController = require('../managers/User').getUserByNameAndPassword;

module.exports.index = function(req, res) {
    res.render('Login', {
        pageTitle: 'Login'
    });
};

module.exports.submit = function(req, res) {
    console.log('araba');
    res.send(LoginController);
};