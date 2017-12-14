// server.js
// SERVER-SIDE JAVASCRIPT


/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
var express = require('express'),
  bodyParser = require('body-parser');

var db = require('./models');
// generate a new express app and call it 'app'
var app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));



////////////////////
//  DATA
///////////////////



////////////////////
//  ROUTES
///////////////////



app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});


// get all books
app.get('/api/books', function (req, res) {
  // send all books as JSON response
  db.Book.find()
  .populate('author')
  .exec(function (err, books) {
    if (err) {
       console.log ("index error: " + err);
    }
    res.json(books);
  }); 
});

// get one book
app.get('/api/books/:id', function (req, res) {
  // find one book by its id
     var bookId = req.params.id;
       db.Book.findOne()
       .populate('author')
       .exec(function (err, book){
          if (err) {
            console.log ("show error: " + err);
          }
       
        res.json(book);
     });
});

// create new book
app.post('/api/books', function (req, res) {
  // create new book with form data (`req.body`)
    var newBook = new db.Book({
      title: req.body.title,
      image: req.body.image,
      releaseDate: req.body.releaseDate,
    });
  res.json(newBook);
});



// update book
app.put('/api/books/:id', function(req, res) {

  db.bookId = req.params.id;
  db.Book.findOneAndUpdate(db.bookId, req.body, {new: true}, function (err, updatedBook){
      res.json(updatedBook);
  
// get book id from url params (`req.params`)

  })});
  


// delete book
app.delete('/api/books/:id', function (req, res) {
  // get book id from url params (`req.params`)
  var bookId = req.params.id;
  // find the index of the book we want to remove
  db.Book.findOneAndRemove({ _id: bookId}, function (err, deletedBook){
    res.json(deletedBook);
  });
});



app.listen(process.env.PORT || 3000, function () {
  console.log('Book app listening at http://localhost:3000/');
});
