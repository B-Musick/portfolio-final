let express     = require('express'); // Import express package
    app         = express(), // Instantiate application
    mongoose    = require('mongoose'), // npm install mongoose --save
    // Takes request body, parses it to JS object applying attributes
    // Needs to be above app.use methods otherwise wont create schema
    bodyParser  = require('body-parser'); 

app.set('view engine', 'ejs'); // Dont have to add .ejs to files
app.use(bodyParser.urlencoded({ extended: true }));

let indexRoutes = require('./routes/index');
let blogRoutes = require('./routes/blogs');

// ROUTE IMPORTS - Shorten the URLS here
app.use('/', indexRoutes); // Import the root router
app.use('/blogs', blogRoutes); // Import blog routes

// CONNECT THE DATABASE RUNNING ON DEFAULT PORT 27017
mongoose.connect("mongodb://localhost:27017/portfolio"), { useNewUrlParser: true }; 

// MODELS
let Blog = require('./models/blog');

// PREVENTS ANY BACKLASH FROM DIRECTORY CHANGES
// Allows stylesheets to be imported to header accessing '/stylesheets'
app.use(express.static(__dirname + "/public"));

Blog.create({
    title: 'Portfolio',
    image: 'hi',
    text: 'Body of blog'
})
app.listen(3000,()=>{
    // Start application
    console.log('Server Ready')
});