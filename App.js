var express = require('express');
var app = express();
var path = require('path');
var LoginRouter = require('./src/router/Login');
var HomeRouter = require('./src/router/Home');
var MainRouter = require('./src/router/Main');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/', MainRouter);
app.use('/home', HomeRouter);
app.use('/login', LoginRouter);

app.listen(3000, function() {
    console.log('Server running at 3000');
});