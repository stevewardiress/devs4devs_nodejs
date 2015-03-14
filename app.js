var http = require('http');
var query = require('url');

var server = http.createServer(handler);
server.listen(1337, '127.0.0.1');

function handler(req, res) {
    var arguments = query.parse(req.url, true);
    if(arguments.query.name) {
        res.end('Hello ' + arguments.query.name + '\n');
        return;
    }
    res.end('Hello World\n');
}

console.log('Server running at http://127.0.0.1:1337/');
