module.exports.index = function(req, res) {
    res.render('Main', {
        pageTitle: 'Main',
        username: 'Said Furkan Dize'
    });
};