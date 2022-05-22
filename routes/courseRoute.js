var express = require('express');
var router = express.Router();
const control = require('../controllers/courseController');


//add order
router.post('/addCources', control.addCources);
router.get('/getCourses', control.getCourses);
router.patch('/updateCoursess/:id', control.updateCoursess);
router.delete('/deleteCourses/:id', control.deleteCourses);


module.exports = router;