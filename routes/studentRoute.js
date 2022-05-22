var express = require('express');
var router = express.Router();
const control = require('../controllers/studentController');


//add order
router.post('/addStudents', control.addStudents);
router.get('/getStudents', control.getStudents);
router.patch('/updateStudents/:id', control.updateStudents);
router.delete('/deleteStudents/:id', control.deleteStudents);


module.exports = router;