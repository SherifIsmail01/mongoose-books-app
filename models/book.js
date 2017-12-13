var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	title: String,
	author: String,
	image: String,
	release_date: String 
});

var Book = mongoose.model('book', BookSchema);

module.exports = Book;