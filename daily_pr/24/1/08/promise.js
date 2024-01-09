let a = new Promise((resolve, reject)=>{
    for(let i=0; i<2000; i++){
        console.log(i)
    }
    resolve('first promise')
})

let b = new Promise ((resolve, reject)=>{
    for(let i=0; i<1000; i++){
        console.log(i)
    }
    resolve('second promise')
})
a.then(function(value){console.log('werwer'); return `${value} and bar`})
 .then((value => console.log(value)))

b.then(function(value){console.log('werwer'); return `${value} and bar`})
 .then((value => console.log(value)))


console.log(123)