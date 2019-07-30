let express = require('express'); // Import express package
let app = express(); // Instantiate application

app.set('view engine', 'ejs');

let indexRoutes = require('./routes/index');
let blogRoutes = require('./routes/blogs');

// ROUTE IMPORTS
app.use('/', indexRoutes); // Import the root router
app.use('/blogs', blogRoutes); // Import blog routes

app.listen(3000,()=>{
    // Start application
    console.log('Server Ready')
});