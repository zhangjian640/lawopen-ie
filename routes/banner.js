var express = require('express');
var router = express.Router();

/* GET banner page. */
router.get('/', function(req, res, next) {
  res.render('banner');
});

module.exports = router;
