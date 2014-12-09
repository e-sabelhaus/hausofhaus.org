var express = require('express');
var router = express.Router();

(function(){
  "use strict";

/* GET home page. */
router.get('/login', function(req, res) {
  res.render('login');
});

module.exports = router;
})();
