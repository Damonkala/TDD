var express = require('express');
var router = express.Router();



router.get('/add/:x/:y', function(req, res, next) {
	var x = parseInt(req.params.x)
	var y = parseInt(req.params.y)

  res.send({result: x + y})
});
router.get('/multiply/:x/:y', function(req, res, next) {
	var x = parseInt(req.params.x)
	var y = parseInt(req.params.y)

  res.send({result: x * y})
});

module.exports = router;
