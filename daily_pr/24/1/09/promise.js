function a(){
    new Promise(resolve=>{
        resolve(console.log(123))
    })
}

function b(text){
    console.log(text);
}

new Promise(resolve=>{
    setTimeout(() => {
        console.log('this is promise time!')
    }, 2000);
}).then(2);

console.log('hello worlds')
b('hello there')
b('neverlands')