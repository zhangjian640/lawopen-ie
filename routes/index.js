var express = require('express');
var router = express.Router();
var data = require('../data');

router.get('/', function (req, res, next) {
  console.log(req.query.p);
  var page = parseInt(req.query.p) || 0;
  var count = 8;
  var index = page * count;
  var results = data.slice(index, index + count);

  res.render('index', {
    current: page + 1,
    total: Math.ceil(data.length / count),
    results: results
  });

});

router.post('/query', function (req, res, next) {
  var data = data;
  console.log(req.query.q);

  var page = parseInt(req.query.q);
  var count = 8;
  var index = (page - 1) * count;

  var result = data.slice(index, index + count);

  console.log(req.query.q);
  console.log(result);

  res.json({
    current: page,
    total: data.length,
    results: results
  });

});

module.exports = router;
