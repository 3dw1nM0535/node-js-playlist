var mongoose = require('mongoose');

var bodyParser = require('body-parser');

var data = [
  {item: 'get milk'},
  {item: 'walk dog'},
  {item: 'kick some coding ass'}
];

var urlencodedbodyParser = bodyParser.urlencoded({extended: false });

module.exports = (app) => {

  app.get('/todo', (req, res) => {
    res.render('todo', {todos: data });
  });

  app.post('/todo', urlencodedbodyParser, (req, res) => {
    data.push(req.body);
    res.json(data);
  });

  app.delete('/todo/:item', (res, req) => {
    data = data.filter((todo) => {
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);
  });

};