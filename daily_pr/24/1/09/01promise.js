
// console.log(Promise.resolve(1).then(2).then(console.log))

let a = Promise.resolve(4).then(2).then(3).then(console.log)

a
console.log(a)