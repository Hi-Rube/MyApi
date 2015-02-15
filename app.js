/**
 * Created by Rube on 15/2/15.
 */
var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var router = require('./router');
var path = require('path');
var session = require('express-session')

var app = express();
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/', router);
app.use(function(err, req, res, next){
  console.log(err);
  return res.status(500).send('error');
});
app.listen(config.web.port);


