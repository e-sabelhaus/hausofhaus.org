var express = require('express');
var router = express.Router();

(function(){
  "use strict";

  /* GET home page. */
  router.get('/', function(req, res) {
    res.render('index');
  });

module.exports = router;
})();
