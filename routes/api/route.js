var middleWare = require("../../modules/ourMiddleware");

module.exports = function(app) {
    app.all('/api', middleWare.authenticateUser, middleWare.requireAuthentication);
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
};