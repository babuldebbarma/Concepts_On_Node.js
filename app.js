// Readable Streams and Writeable Streams


var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', function(chunk){
    console.log('new chunk received:');
    myWriteStream.write(chunk);
});



/*
var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
   res.writeHead(200, {'content-Type': 'text/plain'});
   res.end('Hello world');
});

server.listen(3000);
console.log('Hello boy'); */