var express = require('express');
var router = express.Router();

var Book = require('../models/book');


router.get('/', function(req, res, next) {
	Book.find({}, function(err, books) {
	res.status(err ? 400 : 200).send(err || books);
	});
});
router.post('/', function(req, res, next) {
	Book.create(req.body, function(err, books) {
			res.status(err ? 400 : 200).send(err || books);
	});
});

module.exports = router;
