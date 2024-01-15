let a = async function () {
	let c = await b();
	return c;
};

function b() {
	return new Promise((resolve)=>{
        resolve(123)
    });
}

a.then((value) => {
	console.log(value);
});
