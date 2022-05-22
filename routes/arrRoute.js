var express = require('express');
var router = express.Router();
const control = require('../controllers/aggrController');


//add order
router.post('/addAggregation', control.addAggregation);
router.get('/getAggregation', control.addField);
router.get('/groupAggregation', control.group);
router.get('/unwindAggregation', control.unwind);
router.get('/matchAggregation', control.match);



module.exports = router;