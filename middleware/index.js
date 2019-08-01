var middlewareObj = {};
var Blog = require('../models/blog');


middlewareObj.isLoggedIn =
    (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login');
    }

module.exports = middlewareObj
