var express = require('express');

var port = 3000;

var app = express();

app.get('/', (req, res) => {
  res.send('This is the homepage!');
});

app.get('/contact', (req, res) => {
  res.send('This is the contact page!');
});

app.listen(port);