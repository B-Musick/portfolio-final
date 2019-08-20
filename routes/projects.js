let express = require('express');
let router = express.Router();
let path = require('path');

router.get('/',(req,res)=>{
    res.render('projects/index')
});

router.get('/2048',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views/projects/2048/index.html'));
})

module.exports = router;