var middleWare = require("../../modules");
var express = require('express');
var router = express.Router();

// middleware specific to this router
router.use(middleWare.authenticateUser, middleWare.requireAuthentication);

// define the home page route
router.get('/', function(req, res) {
    var presentationObject = {
        name: "node.js",
        description: "node.js presentation"
    };
    res.json(presentationObject);
});

module.exports = router;