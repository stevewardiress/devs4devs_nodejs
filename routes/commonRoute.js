module.exports = function(app) {

//  this function runs for any request on any url
    app.all("/", function (req, res, next) {
        res.write("middleware woz ere<br>");
        next();
    });

//  handle any other requests
    app.use(function (req, res) {
        res.status(404).write('Sorry cant find that!');
        res.end();
    });

};