// BLOG ROUTES
let express = require('express');
let router = express.Router();

/***************************INDEX ROUTE ******************************* */
router.get('/',(req,res)=>{
    res.render('blogs/index');
});

module.exports = router;