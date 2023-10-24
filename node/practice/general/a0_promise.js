let promise = new Promise(function(resolve, reject){
        resolve(()=>{
            console.log(1)
            for(let i=0; i<10000; i++){
                console.log(i)
            }
        }
        )
        for(let i=0; i<10000; i++){
            console.log(i)
        }
        
})

promise.then((a)=>{
    console.log('hihihihihi');
})