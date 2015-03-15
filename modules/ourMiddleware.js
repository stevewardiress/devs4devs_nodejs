module.exports = {
    authenticateUser: function (req, res, next) {
        if (req.query.token) {
            //  validate the token here :-)
            res.locals.isAuthenticated = true;
        }
        next();
    },

    requireAuthentication: function (req, res, next) {
        if (!res.locals.isAuthenticated) {
            res.status(401).write("access is denied!");
            return res.end();
        }
        next();
    }

};