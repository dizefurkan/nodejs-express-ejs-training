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

app.listen(3000, function() {
    console.log('Server running at 3000');
});