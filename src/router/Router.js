var MainRouter = require('./Main');
var HomeRouter = require('./Home');
var LoginRouter = require('./Login');
var RegisterRouter = require('./Register');
var UserListRouter = require('./UserList');

module.exports = function(app) {
    app.use('/', MainRouter);
    app.use('/home', HomeRouter);
    app.use('/login', LoginRouter);
    app.use('/register', RegisterRouter);
    app.use('/userlist', UserListRouter);
}