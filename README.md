package.json
- List package dependencies
- Allows specific version numbers
- ensures project doesnt break
- Author, description, keywords to describe , licenses, version of project, dependencies

SEMANTIC VERSIONING OF DEPENDENCIES
-- MAJOR.MINOR.PATCH --
- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

- tilde(~) update mose recent patch version ("some-package-name": "~1.3.8" allows updates to any 1.3.x version.)

- Carat(^) for latest minor version ("some-package-name": "^1.3.8" allows updates to any 1.x.x version.)

NODE
- JS tool allowing back end (server side) programs, comes with built in modules
- Can use browser console to debug

EXPRESS
- Runs between server created by node and front end of web app
- Handles application routing

MONGODB
- Database storing records for use by application
- It is a relational database (NoSQL) where stores all data associated with one record instead of storing it across many preset tables
- They are scalable, flexible (adding new datasets), replication
- Uses JSON as document storage
- Accessing documents is like accessing objects in JS


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