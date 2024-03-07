let {glob, globSync} = require('glob');

let test = glob.sync('../**/*.js');
// console.log(test);

function a(b){
    console.log(b);
};

let c = globSync('../**/*.js'); a(c)