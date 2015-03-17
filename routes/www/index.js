var express = require('express');
var router = express.Router();
var middleWare = require("../../modules");

router.use(express.static('public'));

// authenticate the user if there's a token, but don't force them to login
router.use(middleWare.authenticateUser);

module.exports = function(app) {
    return router;
}