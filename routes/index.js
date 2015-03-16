module.exports = function(app) {

    //  load all of our routers and add them to the application
    app.use("/api", require("./api"));
    app.use("/", require("./www"));

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