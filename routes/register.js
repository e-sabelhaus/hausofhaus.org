var express = require('express');
var router = express.Router();

(function(){
  "use strict";

  /* GET home page. */
  router.get('/register', function(req, res) {
    res.render('register');
  });

  module.exports = router;
})();
