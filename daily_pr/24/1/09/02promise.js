const p1 = new Promise((resolve, reject) => {
    resolve("Success!");
    reject(new Error("Error!"));
  });
  
  p1.then(
    (value) => {
      console.log(value); // Success!
    },
    (reason) => {
      console.error(reason); // Error!
    },
  );
  