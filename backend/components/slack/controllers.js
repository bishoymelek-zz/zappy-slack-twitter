let twitterContollers = require('../twitter/controllers');

exports.specificKeywordDetected = function(req, res) {
   twitterContollers.fetchTweets(function(done) {
     console.log(done);
    if (done === true) {
      res.json({
        "text": "Thanks for your 'Go' sentence!"
      })
    } else {
      res.json({
        "text": "Couldn't excute the 'Go' sentence operation correctly"
      })
    }
  })
}
