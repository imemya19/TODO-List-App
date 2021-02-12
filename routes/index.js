const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/home_controller');


router.get('/', HomeController.home);
router.get('/home', HomeController.home);

//middleware
router.use('/add-task', require('./add_task'));
// console.log('in index router');

router.use('/del-task', require('./delete_task'));
module.exports = router;