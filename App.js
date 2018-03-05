var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var ejsLayout = require('express-ejs-layouts');
var jwt = require('jsonwebtoken');

var Router = require('./src/router/Router');
var Database = require('./src/models/Database');
var Config = require('./src/models/Config');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public/views/pages'));
app.use(ejsLayout);

Router(app);

app.use(checkToken, function(req, res, next) {
    res.send("araba");
})

function checkToken(req, res) {
    var token = req.headers['token'];
    if (token) {
        var decoded = jwt.verify(token, Config.secretKey, function(err, data) {
            if (err) {
                return res.send("Token Error ${err}");
            } else {
                return res.json({data});
            }
        });
    } else {
        res.send('No Token');
    }
};

app.listen(Config.port, function() {
    console.log('Server running at localhost:%s', Config.port);
})