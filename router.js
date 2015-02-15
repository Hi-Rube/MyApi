/**
 * Created by Rube on 15/2/15.
 */

var express = require('express');
var admin = require('./controllers/admin');
var api = require('./controllers/apidata');
var router = express.Router();

router.post('/login', admin.login);
router.get('/api', api.findAllApi);
router.post('/api/post', api.insertApi)
router.post('/api/delete', api.deleteApi);
router.post('/api/update', api.updateApi);
router.get('/', function(req, res){
  res.redirect("/public/login.html");
});

module.exports = router;
