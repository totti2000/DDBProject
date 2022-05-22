var express = require('express');
var router = express.Router();
const control = require('../controllers/profController');


//add order
router.post('/addProf', control.addProf);
router.get('/getProf', control.getProf);


module.exports = router;