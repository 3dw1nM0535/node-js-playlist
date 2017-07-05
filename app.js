var express = require('express');

var port = 3000;

var app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/home', (req, res) => {
  res.render('index');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/profile/:name', (req, res) => {
  res.render('profile', {person: req.params.name });
})

app.listen(port);