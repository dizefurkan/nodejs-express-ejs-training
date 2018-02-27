var path = require('path');

module.exports.index = function(req, res) {
    res.sendFile(path.join(__dirname, '../pages/Login.html'));
};

module.exports.submit = function(req, res) {
    console.log(req.body);
    res.sendFile(path.join(__dirname, '../pages/Login.html'));
}