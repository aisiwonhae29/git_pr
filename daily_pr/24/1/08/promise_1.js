let test = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('resolve')
    }, 2000)
})
test.then(el=>console.log(el))
setTimeout(() => { console.log('hello worlds') }, 500);
setTimeout(() => { console.log('hello worlds') }, 1000);
setTimeout(() => { console.log('hello worlds') }, 1500);
setTimeout(() => { console.log('hello worlds') }, 2000);
setTimeout(() => { console.log('hello worlds') }, 2500);
setTimeout(() => { console.log('hello worlds') }, 3000);
setTimeout(() => { console.log('hello worlds') }, 3500);
setTimeout(() => { console.log('hello worlds') }, 4000);
setTimeout(() => { console.log('hello worlds') }, 4500);
setTimeout(() => { console.log('hello worlds') }, 5000);
setTimeout(() => { console.log('hello worlds') }, 5500);
setTimeout(() => { console.log('hello worlds') }, 6000);
setTimeout(() => { console.log('hello worlds') }, 6500);