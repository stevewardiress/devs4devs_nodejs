module.exports = function(app) {

    //  this function runs for any request on any url
    app.all("*", function (req, res, next) {
        console.log("middleware running for url %s", req.url);
        next();
    });

    //  load all of our routers and add them to the application
    app.use("/api", require("./api"));
    app.use("/", require("./www"));

    //  handle any other requests
    app.use(function (req, res) {
        res.status(404).write('Sorry cant find that!');
        res.end();
    });

};