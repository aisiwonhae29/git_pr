let test = 'hi myname is kim siwonzzz';
let reg_01 = /[A-z]/g
let reg_02 = /[^A-x]/g
console.log(reg_01.exec(test));
console.log(reg_01.exec(test));
console.log(reg_01.exec(test));
console.log(reg_01.exec(test));
console.log(reg_01.exec(test));
console.log(reg_01.exec(test));

console.log(reg_02.exec(test));
console.log(reg_02.exec(test));
console.log(reg_02.exec(test));
console.log(reg_02.exec(test));
console.log(reg_02.exec(test));
console.log(reg_02.exec(test));
console.log(reg_02.exec(test));
console.log(reg_02.exec(test));
console.log(reg_02.exec(test));

let t01_arr = test.match(/[a-zA-Z0-9]/g);
console.log(t01_arr)
for(el in t01_arr){
    console.log(t01_arr[el])
}

test;
let test2 = 'him hilll hikkeo hihihi ihi'
console.log("\ud83d")

console.log(/hi/.test(test))
console.log(test.match(/hi( my)/))
console.log(test2.match(/(hi)/))
console.log(/hi/.exec(test2));

let reg_ob_01 = /(hi)/.exec(test2)
console.log(reg_ob_01)
reg_ob_01.forEach(el=>{
    console.log(el)
})

console.log('\u{41}')