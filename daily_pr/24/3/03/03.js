let l1 = [2, 4, 3];
let l2 = [5, 6, 4];

var addTwoNumbers = function (l1, l2) {
	let a1_l = l1.length;
	let a2_l = l2.length;
	let a1_n = 0;
	let a2_n = 0;

	for (let i = a1_l - 1; i >= 0; i--) {
		a1_n += l1[i] * 10 ** (a1_l - i-1);
	}
	for (let i = a2_l - 1; i >= 0; i--) {
		a2_n += l2[i] * 10 ** (a2_l - i -1);
	}
    console.log(a1_n + a2_n);
	return a1_n + a2_n;
};

addTwoNumbers(l1, l2);
