const TaskList = require('../models/task_schema');

module.exports.home = function(req, res) {
    //fetch tasks from database
    TaskList.find({}, function(err, tasks) {
        if (err) {
            console.log('error in fetching the tasks from db');
            return;
        }

        //now render the resulting homepage
        return res.render('homepage', {
            title: "todo list",
            task_list: tasks,
        });
    });
};