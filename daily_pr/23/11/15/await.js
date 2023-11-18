async function t_await(){
    console.log('inner statement');
    await test();
    console.log('inner statement')
    await test1();
}

async function test(){
    for(let i =0; i<2000000000; i++){
    }
    console.log(123);
    return 1;
}

async function test1(){
    for(let i =0; i<1000000000; i++){
    }
    console.log(456);
    return 1;
}

t_await();