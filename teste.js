var serialjs=require('serialport-js');
serialjs.open(
    '/dev/ttyACM0',
    start,
    '\n'
);

function start(port){
    port.on(
        'data',
        gotData
    );

    port.send('55555sadfdasffasfadfdwavcvs4')
}

function gotData(data){
    console.log(data);
} 
