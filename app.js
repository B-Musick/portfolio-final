let express     = require('express'); // Import express package
    app         = express(), // Instantiate application
    mongoose    = require('mongoose'), // npm install mongoose --save
    // Takes request body, parses it to JS object applying attributes
    // Needs to be above app.use methods otherwise wont create schema
    bodyParser  = require('body-parser'),
    passport = require('passport'),
    LocalStrategy = require('passport-local');
    d3 = require('d3');

const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'app')));
// This is needed for the PUT request of update
let methodOverride = require('method-override');

let indexRoutes = require('./routes/index');
let blogRoutes = require('./routes/blogs');
let projectRoutes = require('./routes/projects');

// MODELS
let Blog = require('./models/blog');
let User = require('./models/user');

/**************************PASSPORT CONFIGURATION *************************** */
app.use(require('express-session')({
    secret: 'You are the coolest',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// APPLY currentUser FROM PLANT INDEX ROUTE TO ALL ROUTES SINCE IN HEADER
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next(); // This moves to the next middleware route
});

app.use(methodOverride("_method"));

// CONNECT THE DATABASE RUNNING ON DEFAULT PORT 27017
mongoose.connect("mongodb+srv://brendan:tootootreetree@portfolio-cluster-je0rn.mongodb.net/test?retryWrites=true&w=majority", {
    userNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log("Connected to DB!");
}).catch(err => {
    console.log("Error: ", err.message);
});

app.set('view engine', 'ejs'); // Dont have to add .ejs to files
app.use(bodyParser.urlencoded({ extended: true }));

// PREVENTS ANY BACKLASH FROM DIRECTORY CHANGES
// Allows stylesheets to be imported to header accessing '/stylesheets'
// Serve static assets
app.use(express.static(__dirname + "/public"));

// ROUTE IMPORTS - Shorten the URLS here
// Need to be at the bottom ? wasnt letting me create new blog, edit
app.use('/', indexRoutes); // Import the root router
app.use('/blogs', blogRoutes); // Import blog routes
app.use('/projects',projectRoutes); // Import project routes



app.listen(3000,()=>{
    // Start application
    console.log('Server Ready')
});