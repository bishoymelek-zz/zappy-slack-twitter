var express = require('express');
var router = express.Router();
const controllers = require('./controllers')

router.post('/keyword-detected', controllers.specificKeywordDetected)

module.exports = router;
