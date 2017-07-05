var http = require('http');
var fs = require('fs');

var myStream = fs.createReadStream(__dirname + '/readAble.txt', 'utf8');
var writeStream = fs.createWriteStream(__dirname + '/witeMe.txt');

myStream.on('data', (chunk) => {
  console.log('New chunk received...');
  writeStream.write(chunk);
});

/*
var port = 3000;

var server = http.createServer((req, res) => {
  console.log(`Request received from browser ${req.url}`);
  res.writeHead(200, {'Content-Type': 'text/plain' });
  res.end('Node server running in background!');
});

server.listen(port, '127.0.0.1');
console.log(`Server listening on port ${port}`);
*/