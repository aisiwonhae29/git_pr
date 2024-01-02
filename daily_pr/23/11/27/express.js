let express = require('express');
let app = express();

app.set('myname is', 'kimsiwon')
console.log(app.get('myname is'))

function a(req, res, next){
    console.log('hihihihihihihihihi')
    next();
}

app.use(function(req, res, next){
    next();
})

app.use(a())