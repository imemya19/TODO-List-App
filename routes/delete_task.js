const express = require('express');
const router = express.Router();
const DeleteController = require('../controllers/del_task_controller');
router.use(express.urlencoded());
const TaskList = require('../models/task_schema');

router.post('/', DeleteController.delfn);

module.exports = router;