var express = require('express');

var port = 3000;

var app = express();

app.get('/', (req, res) => {
  res.send('This is the homepage!');
});

app.get('/contact', (req, res) => {
  res.send('This is the contact page!');
});

app.get('/profile/:name', (req, res) => {
  res.send(`You requested to see profile of ${req.params.name}`);
})

app.listen(port);