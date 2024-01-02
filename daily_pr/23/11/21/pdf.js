let fs = require('fs');

// fs.readFile('play', 'utf8',(err, files)=>{
//     if (err){
//         console.error(err);
//     }
//     console.log(files);
// })

fs.readFile('a.pdf','utf8', (err, files)=>{
    console.log(files);
})