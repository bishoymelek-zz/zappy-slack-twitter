var express = require('express');
var router = express.Router();
const controllers = require('./controllers')

router.get('/fetching-tweets', controllers.fetchTweets);
router.get('/all-tweets', controllers.getTweets);


module.exports = router;
