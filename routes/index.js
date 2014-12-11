var express = require('express');
var router = express.Router();

(function(){
  "use strict";

    /* GET home page. */
  router.get('/', function(req, res) {
    res.render('index');
  });

  // /* GET home page. */
  // router.get('/login', function(req, res) {
  //   res.render('login');
  // });
  //
  // /* GET home page. */
  // router.get('/register', function(req, res) {
  //   res.render('register');
  // });
  //
  // /* GET users listing. */
  // router.get('/users', function(req, res) {
  //   res.render('user');
  // });
  //
  // router.get('/profile', function(req, res) {
  //   res.render('profile');
  // });

module.exports = router;
})();
