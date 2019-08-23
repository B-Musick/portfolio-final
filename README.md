NODE APP
- Need to install d3 and require in app.js
<!-- https://stackoverflow.com/questions/9948350/how-to-use-d3-in-node-js-properly -->
- When loading D3 to Node app, you need to make sure to put the JS and CSS file in the /public folder then change the associated root
<!-- Robert Macneils answer
https://teamtreehouse.com/community/cant-get-the-css-to-load-in-the-nodejs-server -->
  const bodyParser = require('body-parser');

  //body parser middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(express.static(path.join(__dirname, 'public')));

- Also need the absolute path to the index.html file (__dirname), need to use npm path as well to join '..' to allow access when in 'routes'. __dirname will refer to the path to the current folder your in, so if in 'routes' and need to be in 'views', then need to go back a folder
<!-- https://stackoverflow.com/questions/18088034/how-to-go-up-using-dirname-in-the-folder-hierarchy/18088133 -->
- Need to res.sendFile() as well and not render 

router.get('/2048',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views/projects/2048/index.html'))
})

CSS
- Put position: relative in a parent element, then if place position: absolute in any child, and use say top, bottom, etc... these will be relative to the parent with positiion: relative