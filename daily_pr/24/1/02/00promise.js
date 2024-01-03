function doSomething() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Other things to do before completion of the promise
        console.log("Did something");
        // The fulfillment value of the promise
        resolve("https://example.com/");
        // throw new Error('error!!s');
      }, 200);
    });
  }

  function test1(result1){
    console.log(123)
    return result1;
  }

  function test2(result2){
    console.log(44444);
    return result2;
  }
  const promise = doSomething();
  const promise2 = promise.then((result)=>{console.log(result)}, (err)=>{console.error(err)}).then((result1)=>test1(result1)).then((result2)=>test2(result2));
  