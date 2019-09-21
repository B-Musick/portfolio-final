let express = require('express');
let router = express.Router();
let path = require('path');

router.get('/',(req,res)=>{
    res.render('projects/index')
});

/* SERVE HTML FILE 
- need absolute path, thats why __dirname used (contains absolute path to this file
- and allows to keep the same path when add site to heroku or use locally)
- res.sendFile() instructs browser how to handle file you want to send
- Use '..' to go back a file
*/
router.get('/2048',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views/projects/2048/index.html'));
})

router.get('/calculator', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views/projects/calculator/index.html'));
})

// How to return json
router.get('/json/:name',(req,res)=>{
    // Take the route parameter input from client
    res.json({'name':req.params.name});
})



module.exports = router;