let express = require('express');
let router = express.Router();
let path = require('path');
let Score = require('../models/score');

router.get('/',(req,res)=>{
    res.render('projects/index')
});

/* SERVE HTML FILE 
- need absolute path, thats why __dirname used (contains absolute path to this file
- and allows to keep the same path when add site to heroku or use locally)
- res.sendFile() instructs browser how to handle file you want to send
- Use '..' to go back a file
*/

/******************************** 2048 ************************************ */
router.get('/2048',(req,res)=>{
    // Sort the scores then pass them to the page
    Score.find().sort({score: -1}).exec((err, foundScores) => {
        err ? console.log(err) : res.render('projects/2048/index', { scores: foundScores});
    });
})

// CREATE ROUTE
router.post('/2048/:score', (req, res) => {
    // Get score from the screen 
    
    let scoreVal = parseInt(req.params.score);
    // Send post requrest to landing page the post to the landing page
    let newScore = { player: req.body.score.player, score: scoreVal};

    Score.create(newScore, (err, score) => {
        // If score works then redirect to the landing page
        err ? console.log(err) : res.redirect('/2048/index');
    });

})

// SHOW ROUTE
// router.get('/:id', (req, res) => {
//     Post.findById(req.params.id).populate('comments').exec((err, showPost) => {
//         err ? console.log(err) : res.render("posts/show", { post: showPost })
//     })
// })

router.get('/calculator', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views/projects/calculator/index.html'));
})

// How to return json
router.get('/json/:name',(req,res)=>{
    // Take the route parameter input from client
    res.json({'name':req.params.name});
})



module.exports = router;