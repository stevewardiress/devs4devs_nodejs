var middleWare = require("../../modules");
var express = require('express');
var router = express.Router();

// middleware specific to this router
router.use(middleWare.authenticateUser, middleWare.requireAuthentication);

// define the home page route
router.get('/', function(req, res) {
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

module.exports = router;