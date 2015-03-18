var middleWare = require("../../modules");

module.exports = function(app) {

    //  middleware: check if the token is there
    app.all('/api', middleWare.authenticateUser, middleWare.requireAuthentication);

    app.get('/api', function(req, res){
        var presentationObject = {
            name: "node.js",
            description: "node.js presentation"
        };
        res.json(presentationObject);
    });
};