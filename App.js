var express = require('express');
var app = express();
var ejs = require('ejs');
var ejsLayout = require('express-ejs-layouts');
var path = require('path');
var bodyParser = require('body-parser');
var Router = require('./src/router/Router');
var Database = require('./src/models/Database');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public/views/pages'));
app.use(ejsLayout);
Router(app);

var server = app.listen(80, '127.0.0.1', function() {
    var address = server.address().address;
    var port = server.address().port;
    console.log('Server running at http://%s:%s', address, port);
});