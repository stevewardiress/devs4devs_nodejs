module.exports = function(app) {
    app.get('/', function (req, res) {
        res.write('Got a GET request');
        res.end();
    });

    app.post('/', function (req, res) {
        res.write('Got a POST request');
        res.end();
    });
}