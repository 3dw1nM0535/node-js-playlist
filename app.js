var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

var port = 3000;

//set templating engine
app.set('view engine', 'ejs');

//static files handler
app.use(express.static('/public'));

//todoController model
todoController(app);

//listening port
app.listen(port);
console.log(`You are listening on port ${port}`);