module.exports = function(app) {
    app.get('/', function (req, res) {
        res.write('GET');
        res.end();
    });

    app.post('/', function (req, res) {
        res.write('POST');
        res.end();
    });
};