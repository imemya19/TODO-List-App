const TaskList = require('../models/task_schema');

module.exports.delfn = function(req, res) {

    //console.log(req.query);
    let id = req.query.id;
    TaskList.findByIdAndDelete(id, function(err) {
        if (err) {
            console.log('error in del from db');
            return;
        }
        return res.redirect('back');
    });
};