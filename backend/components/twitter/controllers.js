//dependences
const rp = require('request-promise');
const tweetsModel = require('./tweets-model');
exports.fetchTweets = async function(callback) {
  // auth http request option to twitter api
  var authOptions = {
    method: 'POST',
    uri: 'https://api.twitter.com/oauth2/token?grant_type=client_credentials',
    headers: {
      "Authorization": "Basic " + new Buffer("zMHg07m4drayeaVbZueWf5fNu:PXMXBEFBN5tXxZ9DsLWZXtXkKSYJtUBIfAxPhH7h7BOD52IcZA").toString('base64'),
      "contentType": "application/x-www-form-urlencoded;charset=UTF-8"
    },
  };
  //make a request and assign the res to a var
  let auth = await rp(authOptions);
  // console.log(auth);
  // get the access_token prop after parsing the res we got
  let access_token = JSON.parse(auth).access_token;
  // if the access_token has a value , We will use it to fetch the tweets we need
  if (access_token) {
    //http request options for fetching the tweets
    var fetchTweetsOptions = {
      method: 'GET',
      uri: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=bishoy_melek&count=2',
      headers: {
        "Authorization": 'Bearer ' + access_token,
      },
    };
    let tweets = await rp(fetchTweetsOptions);
    console.log(tweets);
    tweetsModel.insertMany(JSON.parse(tweets))
      .then(function(mongooseDocuments) {
        // console.log(mongooseDocuments);
        callback(true);
      })
      .catch(function(err) {
        // console.log(err);
        callback(false);
      });
  }
}

exports.getTweets = function(req, res) {
  tweetsModel.find({}, (err, tweetsFound) => {
    if (err || !tweetsFound) {
      res.json({
        success: false,
        message: err || 'not found'
      })
    } else {
      res.json({
        success: true,
        data: tweetsFound
      })

    }
  });
}
