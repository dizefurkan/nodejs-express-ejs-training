var getUserByNameAndPassword = require('../managers/User').getUserByNameAndPassword;

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
        var promise = getUserByNameAndPassword(user);
        promise.then(function(result) {
            if (result.success) {
                res.send({ success: true, token: result.token });
            } else {
                res.send({ success: result.success, message: result.message });
            }
        })
    } else {
        res.send('Username and password is required!');
    }
};