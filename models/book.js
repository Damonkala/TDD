'use strict';

var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
	title: String,
	author: String
});

var Book = mongoose.model('Book', bookSchema);


module.exports = Book;
