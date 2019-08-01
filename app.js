let express     = require('express'); // Import express package
    app         = express(), // Instantiate application
    mongoose    = require('mongoose'), // npm install mongoose --save
    // Takes request body, parses it to JS object applying attributes
    // Needs to be above app.use methods otherwise wont create schema
    bodyParser  = require('body-parser'),
    passport = require('passport'),
    LocalStrategy = require('passport-local');


    


app.set('view engine', 'ejs'); // Dont have to add .ejs to files
app.use(bodyParser.urlencoded({ extended: true }));

let indexRoutes = require('./routes/index');
let blogRoutes = require('./routes/blogs');

// ROUTE IMPORTS - Shorten the URLS here
app.use('/', indexRoutes); // Import the root router
app.use('/blogs', blogRoutes); // Import blog routes


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


// CONNECT THE DATABASE RUNNING ON DEFAULT PORT 27017
mongoose.connect("mongodb://localhost:27017/portfolio"), { useNewUrlParser: true }; 

// PREVENTS ANY BACKLASH FROM DIRECTORY CHANGES
// Allows stylesheets to be imported to header accessing '/stylesheets'
app.use(express.static(__dirname + "/public"));

app.listen(3000,()=>{
    // Start application
    console.log('Server Ready')
});