var mongoose = require('mongoose');

//Connect to database
mongoose.connect('mongodb://test:test@ds151062.mlab.com:51062/todo');

//Create a schema - like a blueprint to our db
var todoSchema = new mongoose.Schema({
  item: String
});

//Model
var Todo =mongoose.model('Todo', todoSchema);

var bodyParser = require('body-parser');

/*
var data = [
  {item: 'get milk'},
  {item: 'walk dog'},
  {item: 'kick some coding ass'}
];
*/

var urlencodedbodyParser = bodyParser.urlencoded({extended: false });

module.exports = (app) => {

  //Get data and pass it to the view
  app.get('/todo', (req, res) => {
    Todo.find({}, (err, data) => {
      if(err) throw err;
      res.render('todo', {todos: data });
    })
  });

  //Post data to the database and save it
  app.post('/todo', urlencodedbodyParser, (req, res) => {
    var newTodo = Todo(req.body).save((err, data) =>  {
      if(err) throw err;
      res.json(data);
    })
  });

  //Delete data from the db and update the view
  app.delete('/todo/:item', (res, req) => {
    Todo.find({item: req.params.item.replace(/\-/g, ' ')}).remove((err, data) => {
      if(err) throw err;
      res.json(data);
    });
  });

};