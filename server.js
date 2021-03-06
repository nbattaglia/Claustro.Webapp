var express = require('express');

// Start Server
var app = express();
var port = process.env.PORT || 3000 ;
// Public path configuration
app.use(express.static(__dirname + '/App'));
//app.use('/bower_components',  express.static( path.join(__dirname, '/bower_components')));
// parse application/x-www-form-urlencoded

// Start App
console.log('Starting App... \nlistening on port ' + port);
app.listen(port);
