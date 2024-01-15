let promise = new Promise((resolve, reject)=>{
    resolve(1)
}).then(value=>{ 
    console.log(value) 
    return 1}).then(value1=>{console.log(value1)})

console.log(promise)