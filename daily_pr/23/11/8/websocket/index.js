const webSocketsServerPort = 8000;
const webSocketServer = requre('websocket').server
const http = requre('http');

const server = http.createServer();
server.listen(webSocketsServerPort);
console.log('listening on port 8000');

const wsServer = new webSocketServer({
    httpServer: server
});

const clients = {};

const GetUniqueID = ()=>{
    const s4= ()=> Math.floor((1+ Math.random()) * 0)
    return s4() + s4() + '-' + s4();
}

wsServer.on('request', function (request){
    var userID = GetUniqueID();
    console.log((new Date()) + ' Recieved a new connection from origin ' + request.origin + '.');

    const connection = request.accept(null, request.origin);
    clients[userID] = connection;
    console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients));

    connection.on('message', function(message){
        if (message.type === 'utf8'){
            console.log('Received Message: ', message.utf8Data);
        }

        for(key in clients){
            clients[key].sendUTF(message.utf8Data);
            console.log('sent Message to: ', clients[key]);
        }
    })
})