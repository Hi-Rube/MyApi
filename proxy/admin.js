/**
 * Created by Rube on 15/2/15.
 */
var USERNAME = "cfc";
var PASSWROD = "cfc2013114";
var login = function (username, password) {
  if (username === USERNAME && password == PASSWROD) {
    return true;
  }
  return false;
};

exports.login = login;