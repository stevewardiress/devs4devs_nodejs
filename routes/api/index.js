var middleWare = require("../../modules");
var express = require('express');
var router = express.Router();
var Presentation;

// middleware specific to this router
router.use(middleWare.authenticateUser, middleWare.requireAuthentication);

//  adds some middleware that decodes json being sent to us

// Gets all Presentations
router.get('/Presentations', function(req, res) {
    Presentation.find(function (err, presentations) {
        if (err) {
            return console.error(err);
        }
        res.json(presentations);
    })
});

router.post('/Presentations/:id/Vote', function(req, res) {
    if (!req.body) return res.sendStatus(400)
    console.log(req.body);
});

module.exports = function(app) {
    Presentation = require("../../models/Presentation")(app);
    return router;
};