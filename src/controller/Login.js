var Users = require('../models/Users');

module.exports.index = function(req, res) {
    res.render('Login', {
        pageTitle: 'Login'
    });
};

module.exports.submit = function(req, res) {
    if (req.body.username && req.body.password) {
        Users.findOne({
            username: req.body.username,
            password: req.body.password
        }, function(err, data) {
          if (err) {
              res.send("err");
          } else {
              if (data) {
                  res.send("user found");
              } else {
                  res.send("user not found");
              }
          }
        });
    }
};