let glob = require('glob');

let a = glob.sync('../**/**.js');
a.forEach(function(file){
    console.log(file);
})
