var http = require('http');

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
   res.writeHead(200, {'content-Type': 'text/plain'});
   res.end('Hello world');
});

server.listen(3000);
console.log('Hello boy');