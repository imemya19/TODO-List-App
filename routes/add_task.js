const express = require('express');
const router = express.Router();
const AddTaskController = require('../controllers/add_task_controller');
router.use(express.urlencoded());
const TaskList = require('../models/task_schema');


router.post('/', AddTaskController.addfn);
// console.log('in add_task router');

module.exports = router;