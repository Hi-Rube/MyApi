/**
 * Created by Rube on 15/2/15.
 */
var mongoose = require('mongoose');
var config = require('../config');

var uri = 'mongodb://' + config.mongodb.host + ':' + config.mongodb.port + '/' + config.mongodb.db;
mongoose.connect(uri, config.mongodb.options, function(err){
  if (err){
    console.error('connect to %s error: ', config.mongodb.host, err.message);
    process.exit(1);
  }
});

require('./admin');
require('./apidata');

exports.admin = mongoose.model('Admin');
exports.apidata = mongoose.model('Api');