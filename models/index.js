var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");


var Book = require('./book.js');
var author = require('./author.js');

exports.Book = Book;
exports.author = author;