var express = require('express');
var app = express();

//  middleware: reads the authorisation token
function authenticateUser(req, res, next) {
    if(req.query.token) {
        //  validate the token here :-)
        res.locals.isAuthenticated = true;
    }
    next();
}

//  middleware: function that protects resources
function requireAuthentication(req, res, next) {
    if(!res.locals.isAuthenticated) {
        res.status(401).write("access is denied!");
        return res.end();
    }
    next();
}

//  api middleware: reads the token and checks if it has been read for all /api/* routes
app.all('/api', authenticateUser, requireAuthentication);

app.get('/api', function(req, res){
    var presentationObject = {
        name: "node.js",
        description: "node.js presentation"
    };
    res.json(presentationObject);
});

app.listen(1337, function () {
    console.log('Server running at http://127.0.0.1:1337/');
});