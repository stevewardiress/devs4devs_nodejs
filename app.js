var express = require("express");
var app = express();

//  store mongoose on the app object
app.mongoose = require('mongoose');

// connect to the database
app.mongoose.connect('mongodb://localhost/local');

var routesInitialise = require("./routes");
routesInitialise(app);

app.listen(1337, function () {
    console.log('Server running at http:/localhost:1337');
});