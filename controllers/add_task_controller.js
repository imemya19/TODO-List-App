 const TaskList = require('../models/task_schema');

 module.exports.addfn = function(req, res) {
     TaskList.create({
         description: req.body.desc,
         category: req.body.category,
         duedate: req.body.date,
     }, function(err, newTask) {
         if (err) {
             console.log('err in adding new task');
             return;
         }
         console.log('success in adding new task', newTask);
         return res.redirect('back');
     });
     console.log(req.body);


 };