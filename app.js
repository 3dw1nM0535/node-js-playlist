var express = require('express');

var port = 3000;

var app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', (req, res) => {
  res.send(`You requested to see profile of ${req.params.name}`);
})

app.listen(port);