var middleWare = require("../../modules");
var express = require('express');
var router = express.Router();

//  ORM types
var Presentation, Vote;

// middleware specific to this router
router.use(middleWare.authenticateUser, middleWare.requireAuthentication);

// Gets all Presentations
router.get('/Presentations', function (req, res) {
    Presentation.find(function (err, presentations) {
        if (err) {
            return console.error(err);
        }
        res.json(presentations);
    })
});

//  deletes all the votes from a presentation
router.delete('/Presentations/:name/Votes', function (req, res) {
    Presentation.update(
        {name: req.params.name},
        {
            $set: {
                votes: []
            }
        },
        {multi: false},
        function (err, numAffected) {
            Presentation.find({name: req.params.name}, function (err, presentations) {
                //console.log(req.body);
                res.json(presentations);
            });
        }
    );
});

router.post('/Presentations/:name/Vote', function (req, res) {
   if (!req.body || req.body.comments == "") return res.status(400).send({ error: 'missing comments'});;

    Presentation.update(
        {name: req.params.name},
        {
            $push: {
                votes: new Vote(req.body)
            }
        },
        {multi: false},
        function(err, numAffected) {
            if (err || numAffected === 0) {
                console.log(err);
                return res.status(500).send({ error: 'no presentations matched "' + req.params.name + '"'});
            }
            Presentation.find({name: req.params.name}, function (err, presentations) {
                res.json(presentations);
            });
        }
    );
});

module.exports = function (app) {
    Presentation = require("../../models/Presentation")(app);
    Vote = require("../../models/Vote")(app);
    return router;
};