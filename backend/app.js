//dependences
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors')

// var debug = require('debug')('my-application');

require('dotenv').config()

//routes
var slackComponent = require('./components/slack/routes');
var twitterComponent = require('./components/twitter/routes');

var app = express();
app.use(cors())

app.set('port', process.env.PORT || 4000);

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.listen(app.get('port'), function() {
  console.log('Express server listening on port: ' + process.env.PORT || +'4000');
});
app.use('/slack', slackComponent);
app.use('/twitter', twitterComponent);

app.get('/', function(req, res) {
  res.json({
    title: 'Express'
  });
});
mongoose.connect(
  'mongodb://mongo:27017', {
    useNewUrlParser: true
  });

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message + " hiii",
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});
