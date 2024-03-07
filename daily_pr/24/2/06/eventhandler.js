const event = require('events');

function case1(){
    class school extends event.EventEmitter {};
    let jbuniv = new school();

    jbuniv.on('mes', ksw);

    function ksw(){
        console.log('my name is kimsiwon');
    };

    jbuniv.emit('mes');
}case1()