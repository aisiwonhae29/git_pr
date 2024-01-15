let a1 = async function a(){
    let c = await b();
    return c;
}
async function b(){
    let b_rs = await b1();
    return b_rs;
}
async function b1(){
    setTimeout(() => {
        return 31;
    }, 500);
}

function c(){
    return new Promise((resolve)=>{resolve(2)})
}

let cc
console.log(c())
console.log(123)