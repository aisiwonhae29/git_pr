function doSomething() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Other things to do before completion of the promise
        console.log("Did something");
        // The fulfillment value of the promise
        // resolve("https://example.com/");
        throw new Error('error!!s');
      }, 200);
    });
  }

  const promise = doSomething();
  const promise2 = promise.then((result)=>{console.log(result)}, (err)=>{console.error(err)});
  