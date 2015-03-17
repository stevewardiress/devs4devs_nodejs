var express = require('express');
var app = express();

function authenticateUser(req, res, next) {
    if(req.query.token) {
        //  validate the token here :-)
        res.locals.isAuthenticated = true;
    }
    next();
}

function requireAuthentication(req, res, next) {
    if(!res.locals.isAuthenticated) {
        res.status(401).write("access is denied!");
        return res.end();
    }
    next();
}

app.all('/api', authenticateUser, requireAuthentication);

//  this function runs for any request on any url
app.all("*", function (req, res, next) {
    console.log("middleware running for url %s", req.url);
    next();
});

app.get('/api', function(req, res){
    var dataObject = {
        someField: "blah",
        anotherField: "deBlah",
        anArray: [
            {key: "abc", value:"first"},
            {key: "def", value:"second"}
        ]
    };
    res.json(dataObject);
});

app.get('/', function (req, res) {
    res.write('Got a GET request');
    res.end();
});

app.post('/', function (req, res) {
    res.write('Got a POST request');
    res.end();
});

//  handle any other requests
app.use(function(req, res) {
    res.status(404).write('Sorry cant find that!');
    res.end();
});

app.listen(1337, function () {
    console.log('Server running at http://127.0.0.1:1337/');
});