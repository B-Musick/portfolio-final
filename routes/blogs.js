// BLOG ROUTES
let express = require('express');
let router = express.Router();

/***************************INDEX ROUTE ******************************* */

/* /blogs - Renders main page showing list of blogs*/
router.get('/',(req,res)=>{
    res.render('blogs/index');
});

/** NEW ROUTE --> /blogs/new */
router.get('/new', (req,res)=>{
    res.render('blogs/new');
});

/** CREATE ROUTE --> /blogs */
router.post('/',(req,res)=>{

});
module.exports = router;