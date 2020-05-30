// BLOG ROUTES
let express = require('express');
let router = express.Router();

let Blog = require('../models/blog')

var middleware = require('../middleware');


/***************************INDEX ROUTE ******************************* */

/* /blogs - Renders main page showing list of blogs*/
router.get('/', (req, res) => {
    // Pass in months, then use blog.date.getMonth (returns number) along with this object to display month
    let months = { '0': 'January', '1': 'February', '2': 'March', '3': 'April', 
                    '4': 'May', '5': 'June', '6': 'July', '7': 'August', 
                    '8': 'September', '9': 'October', '10': 'November', '11': 'December'};
    // Find returns all blogs from database ({})
    // foundBlogs will return the blogs, blogs will hold all the blogs
    Blog.find({}, (err, foundBlogs) => {
        err ? console.log(err) : res.render('blogs/index', { blogs: foundBlogs, months });
    });
});

/** NEW ROUTE --> /blogs/new */
router.get('/new', middleware.isLoggedIn, (req,res)=>{
    res.render('blogs/new');
});

/** CREATE ROUTE --> /blogs */
router.post('/', middleware.isLoggedIn, (req,res)=>{
    /* Sends post request to blogs/index, take the form data from it in req.body */
    let author = {
        id: req.user._id,
        username: req.user.author
    }
    var newBlog = { title: req.body.blog.title, image: req.body.blog.image, text: req.body.blog.text, author:author };

    Blog.create(newBlog, (err, blog) =>{
        err? console.log(err):res.redirect('/blogs');
    });
});

/* SHOW ROUTE --> blogs/show */
router.get('/:id', (req,res)=>{
    // Loads page depending on which object from the database passed base on '._id'
    Blog.findById(req.params.id, (err, showBlog) => {
        // Passes in 
        err ? console.log(err) : res.render('blogs/show', { blog: showBlog });
    });
});

// EDIT ROUTE --> /blogs/:id/edit
router.get('/:id/edit', middleware.isLoggedIn, (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        err ? res.redirect('/blogs') : res.render('blogs/edit', { blog: foundBlog });
    });
});

// UPDATE ROUTE
// Need to find and update the correct blog
// Method arguments finds the id then updates the values

router.put('/:id', middleware.isLoggedIn,(req, res) => {
    // Update particular blog and redirect
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
        err ? res.redirect('blogs') : res.redirect('/blogs/' + req.params.id);
    });
});

// DELETE ROUTE
router.delete('/:id', middleware.isLoggedIn, (req, res) => {
    Blog.findByIdAndRemove(req.params.id, err => {
        err ? res.redirect('/blogs') : res.redirect('/blogs');
    });
});

module.exports = router;