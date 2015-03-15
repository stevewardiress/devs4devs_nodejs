var express = require('express');
var app = express();

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