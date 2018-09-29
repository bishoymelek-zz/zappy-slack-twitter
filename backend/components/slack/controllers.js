let twitterContollers = require('../twitter/controllers');

exports.specificKeywordDetected = async function (req, res) {
    await twitterContollers.fetchTweets(function (done) {
        if (done) {
            res.json({
                "text": "Thanks for your 'Go' sentence!"
            })
        }
    })
}