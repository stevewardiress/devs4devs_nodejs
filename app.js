var express = require("express");
var app = express();

var routesInitialise = require("./routes");
routesInitialise(app);

app.listen(1337, function () {
    console.log('Server running at http://127.0.0.1:1337/');
});