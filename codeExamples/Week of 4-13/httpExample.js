const http = require('http');

const server = http.createServer(function(request, response){
    if(request.url === '/greeting'){
        response.write('Hi');
        
        response.end();
    }
} );//1

server.on('connection', function(socket){
    console.log("Connected!");
});

server.listen(5500);