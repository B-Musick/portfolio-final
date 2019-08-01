// BLOG ROUTES
let express = require('express');
let router = express.Router();

let Blog = require('../models/blog')

/***************************INDEX ROUTE ******************************* */

/* /blogs - Renders main page showing list of blogs*/
router.get('/', (req, res) => {
    // Find returns all blogs from database ({})
    // foundBlogs will return the blogs, blogs will hold all the blogs
    Plant.find({}, (err, foundPlants) => {
        err ? console.log(err) : res.render('blogs/index', { blogs: foundBlogs });
    });
});


/** NEW ROUTE --> /blogs/new */
router.get('/new', (req,res)=>{
    res.render('blogs/new');
});

/** CREATE ROUTE --> /blogs */
router.post('/',(req,res)=>{
    /* Sends post request to blogs/index, take the form data from it in req.body */
    var newBlog = { title: req.body.blog.title, image: req.body.blog.image, text: req.body.blog.text };

    Blog.create(newBlog, (err, blog) =>{
        err? console.log(err):res.redirect('/blogs');
    });
});
module.exports = router;