var http = require('http');
var fs = require('fs');

var port = 3000;

var server = http.createServer((req, res) => {
  console.log(`Request received from browser ${req.url}`);
  res.writeHead(200, {'Content-Type': 'application/json' });

});

server.listen(port, '127.0.0.1');
console.log(`Server listening on port ${port}`);
