var getUserByNameAndPassword = require('../managers/User').getUserByNameAndPassword;

module.exports.index = function(req, res) {
    res.render('Login', {
        pageTitle: 'Login'
    });
};

module.exports.submit = function(req, res) {
    res.send(req.body);
    // res.send({username: req.body.username});
    // res.send("araba");
    // var username = req.body.username;
    // var password = req.body.password;
    // if (username && password) {
    //     var user = {
    //         username: username,
    //         password: password
    //     };
    //     var promise = getUserByNameAndPassword(user);
    //     promise.then(function(result) {
    //         res.send({ success: result.success, message: result.message });
    //     })
    // } else {
    //     res.send('Username and password is required!');
    // }
};