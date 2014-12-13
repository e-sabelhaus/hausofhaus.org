var express = require('express');
var router = express.Router();

(function(){
  "use strict";

    /* GET home page. */
  router.get('/', function(req, res) {
    res.render('index');
  });

  // /* GET login. */
  // router.get('/login', function(req, res) {
  //   res.render('login');
  // });
  //
  // /* GET register. */
  // router.get('/register', function(req, res) {
  //   res.render('register');
  // });
  // /* GET router */
  // router.get('/profile', function(req, res) {
  //   res.render('profile');
  // });

module.exports = router;
})();
