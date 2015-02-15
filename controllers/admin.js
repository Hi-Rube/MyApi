/**
 * Created by Rube on 15/2/15.
 */
var validator = require('validator');
var crypto = require("crypto");
/**
 * md5 加密函数
 * @param text 加密前的文本
 * @returns {String} 加密后的文本
 */
function md5(text) {
  return crypto.createHash('md5').update(text).digest('hex');
}

var admin = require('../proxy/admin');

var login = function (req, res, next) {
  var username = validator.trim(req.body.username);
  var password = validator.trim(req.body.password);
  if (admin.login(username, password)) {
    var hour = 3600000
    req.session.cookie.expires = new Date(Date.now() + hour)
    req.session.cookie.maxAge = hour;
    req.session.login = true;
    return res.json({msg: 'success'});
  } else {
    return res.status(500).send('');
  }
};

exports.login = login;