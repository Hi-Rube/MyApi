/**
 * Created by Rube on 15/2/15.
 */
var apidata = require('../proxy/apidata');

var findAllApi = function (req, res, next) {
  var islogin = req.session.login;
  if (!islogin) {
    return res.status(500).send();
  }
  apidata.findAllApi(function (err, apis) {
    if (err) {
      return next(err);
    }
    return res.json({data: apis, number: apis.length});
  })
};

var insertApi = function (req, res, next) {
  var islogin = req.session.login;
  if (!islogin) {
    return res.status(500).send();
  }
  var doc = req.body.doc;
  var apiContent = req.body.apiContent;
  apidata.insertApi(doc, apiContent, function (err) {
    if (err) {
      return next(err);
    }
    res.json({msg: 'success'});
  });
};

var updateApi = function (req, res, next) {
  var islogin = req.session.login;
  if (!islogin) {
    return res.status(500).send();
  }
  var id = req.body.id;
  var api = req.body.api;
  var doc = req.body.doc;
  apidata.changeApi(id, doc, api, function (err) {
    if (err) {
      return next(err);
    }
    res.json({msg: 'success'});
  });
};

var deleteApi = function (req, res, next) {
  var islogin = req.session.login;
  var id = req.body.id;
  if (!islogin || !id) {
    return res.status(500).send();
  }
  apidata.delApi(id, function (err) {
    if (err) {
      return next(err);
    }
    res.json({msg: 'success'});
  });
};

exports.findAllApi = findAllApi;
exports.insertApi = insertApi;
exports.updateApi = updateApi;
exports.deleteApi = deleteApi;