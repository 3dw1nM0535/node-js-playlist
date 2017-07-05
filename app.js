var http = require('http');
var fs = require('fs');

var port = 3000;

var server = http.createServer((req, res) => {
  console.log(`Request received from browser ${req.url}`);
  if(req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  };
});

server.listen(port, '127.0.0.1');
console.log(`Server listening on port ${port}`);
