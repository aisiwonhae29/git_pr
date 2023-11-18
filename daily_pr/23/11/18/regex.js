

let test = 'hello, hi how are 1 you hellohellooeeei check 2 out 3 1'
let tc = '';
let regex = /(hello)/;
let r_d = /\d+/g;
console.log('ddd'.match(/(d)/))

console.log(regex.exec(test));
console.log((/(hello)/).exec(test))

console.log((/(hello)/g).exec(test))
console.log((/(\w+)/g).exec(test))

let rst = (/(hello)/).exec(test);
console.log(rst[1])
console.log(test.match(/(\w+)/))

console.log(test.match(/(hello)\1/))
console.log(test.split(/\s+/))

console.log(test.match(/(\w+)/))

tc = (r_d).exec(test) ;console.log(tc)
tc = (r_d).exec(test) ;console.log(tc)
tc = /\d+/g.exec(test) ;console.log(tc)

const regex1 = /\d+/g; // Match all occurrences of one or more digits
const str = 'The price is $20, the quantity is 5, and the total is $100';

let match = /\d+/g.exec(str); console.log(match)
match = /\d+/g.exec(str); console.log(match)
match = /\d+/g.exec(str); console.log(match)

let match1 = regex1.exec(str); console.log (match1)
match1 = regex1.exec(str); console.log(match1)
match1 = regex1.exec(str); console.log(match1)
