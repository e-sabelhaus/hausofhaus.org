var express = require('express');
var router = express.Router();

(function(){
  "use strict";

/* GET users listing. */
router.get('/users', function(req, res) {
  res.render('user');
});

module.exports = router;
})();
