var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	title: String,
	author: String,
	image: String,
	release_date: String 
});

var Book = mongoose.model('Book', BookSchema);









var book = mongoose.model('Book', BookSchema);

module.exports = Book;