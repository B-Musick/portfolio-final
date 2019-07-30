let express = require('express'); // Import express package
let app = express(); // Instantiate application

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.send('Hi');
});

app.listen(3000,()=>{
    // Start application
    console.log('Server Ready')
});