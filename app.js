// Create express route object
let express     = require('express'); // Import express package
    app         = express(), // Instantiate application, to access express methods

    // Allows you to write objects for mongo
    mongoose    = require('mongoose'), // npm install mongoose --save
    // Takes request body data from POST request, parses it to JS object applying attributes
    // Needs to be above app.use methods otherwise wont create schema
    // Used to send client data with HTML forms
    // Data hidden in the request body

    bodyParser  = require('body-parser'),
    passport = require('passport'),
    LocalStrategy = require('passport-local');
    d3 = require('d3')
    helmet = require('helmet'),
    dotenv = require('dotenv'); // Required to read .env file

const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'app')));

// Configure the .env file
dotenv.config();

app.use(helmet({
    frameguard: { // configure
        action: 'deny'
    }

}));

// This is needed for the PUT request of update
let methodOverride = require('method-override');

let indexRoutes = require('./routes/index');
let blogRoutes = require('./routes/blogs');
let projectRoutes = require('./routes/projects');

// MODELS
let Blog = require('./models/blog');
let User = require('./models/user');
let Score = require('./models/score');

/**************************PASSPORT CONFIGURATION *************************** */
app.use(require('express-session')({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

// TELL EXPRESS APP TO USE PASSPORT
app.use(passport.initialize());
app.use(passport.session());

// AUTHENTICATE SOMEONE LOCALLY
passport.use(new LocalStrategy(User.authenticate()));

/* To serialize means converting objects contents into a small key that can then 
be deserialized into the original object. This allows us to know whos communicated 
with the server without having to send the authentication data like username and 
password at each request for a new page */
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// APPLY currentUser FROM PLANT INDEX ROUTE TO ALL ROUTES SINCE IN HEADER
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next(); // This moves to the next middleware route
});

app.use(methodOverride("_method"));

// CONNECT THE DATABASE RUNNING ON DEFAULT PORT 27017
// mongoose.connect(process.env.LOCAL_DATABASE, { useNewUrlParser: true }); 
// mongoose.set( 'useUnifiedTopology', true );


// CONNECT TO MONGODB ATLAS DATABASE - pass URI key to connect
mongoose.connect(process.env.DATABASEURL, {
    userNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log("Connected to DB!");
}).catch(err => {
    console.log("Error: ", err.message);
});

app.set('view engine', 'ejs'); // Dont have to add .ejs to files

// Another type of encoding is multipart/form-data used to upload binary files
// We will use urlencoded

app.use(bodyParser.urlencoded({ extended: true }));

/**************** PREVENTS ANY BACKLASH FROM DIRECTORY CHANGES *****************
- Allows stylesheets to be imported to header accessing '/stylesheets'
- Serve static assets
- express.static() is used to serve static assets (directories containing stylesheets, scripts, images, etc)
- So now all pages can access the stylesheets folder in /public by calling src="/stylesheets/.."
- The parameter is the absolute path to folder containing static assets
*/
app.use(express.static(__dirname + "/public"));

// ROUTE IMPORTS - Shorten the URLS here
// Need to be at the bottom ? wasnt letting me create new blog, edit
app.use('/', indexRoutes); // Import the root router
app.use('/blogs', blogRoutes); // Import blog routes
app.use('/projects',projectRoutes); // Import project routes

/*  EXPRESS ROUTES GENERAL FORM
* app.METHOD(PATH, HANDLER)
- METHOD is http method
- PATH is the relative path on server (string or REGEX)
- HANDLER is a function handling express calls when route is matched. (req,res)
*/

// TELL SERVER TO LISTEN ON SPECIFIC PORT
// app.listen(3000,()=>{
//     // Start application
//     console.log('Server Ready')
// });

// TELL SERVER TO LISTEN ON SPECIFIC PORT FOR HEROKU APP
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${PORT}`);
});

