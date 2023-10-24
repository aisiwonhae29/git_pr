const glob = require("glob");

glob('*.js', (error, file)=>{
    if(error){
        console.log(error);
    }
    console.log(file)
})