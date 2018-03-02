module.exports.index = function(req, res) {
    // res.sendFile(path.join(__dirname, '../pages/Home.html'));
    res.render('Home', {
        pageTitle: 'Home'
    });
};