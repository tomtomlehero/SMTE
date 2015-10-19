var express = require('express');
var User = require('../models/User.js');

var router = express.Router();

router.post('/', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  User.addUser(username, password, function(err, user) {
    if (err) throw err;
    res.redirect('/signupForm');
  });
});

module.exports = router;
