let http = require('http');
http.createServer((req, res)=>{
    res.write('hello worlds');
    res.end();
}

).listen(3000)