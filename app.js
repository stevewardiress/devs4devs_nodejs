var express = require('express');
var app = express();
require("./routes/api/route")(app);
require("./routes/www/route")(app);

//  this function runs for any request on any url
app.all("/", function(req, res, next) {
    res.write("middleware woz ere<br>");
    next();
});

//  handle any other requests
app.use(function(req, res) {
    res.status(404).write('Sorry cant find that!');
    res.end();
});

app.listen(1337, function () {
    console.log('Server running at http://127.0.0.1:1337/');
});