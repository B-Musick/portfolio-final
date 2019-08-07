let express = require('express');
let router = express.Router(),
    passport = require('passport');

var User = require('../models/user');

// ROOT ROUTE
router.get('/', (req, res) => res.render('landing'));

/****************************REGISTER ROUTES**********************************/

// REGISTER SHOW ROUTE
router.get('/register', (req, res) => res.render('register'));

// REGISTER NEW ROUTE
router.post('/register', (req, res) => {
    var newUser = new User({ username: req.body.username });

    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.render('register');
        } else {
            passport.authenticate('local')(req, res, () => res.redirect('/blogs'));
        }
    })
})

// LOGIN SHOW ROUTE
router.get('/login', (req, res) => res.render('login'));

// LOGIN POST ROUTE
router.post('/login', passport.authenticate('local',
    {
        successRedirect: '/',
        failureRedirect: '/login'
    }
), (req, res) => { });

// LOGOUT ROUTE
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/blogs');
});




module.exports = router;