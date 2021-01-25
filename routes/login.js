var express = require('express');
var router = express.Router();

/* login page */
router.get('/', function(req, res, next) {
  res.send('You are on login page');
});

module.exports = router;
