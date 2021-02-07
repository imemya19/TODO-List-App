module.exports.home = function(req, res) {
    return res.render('homepage', {
        title: "todo list"
    });
};