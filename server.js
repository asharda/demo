var express = require('express'),
	app = express(),
	port = 3000,
	mongoose = require('mongoose');

	var http = require('http');

require('./models/todo')

var	todoController = require('./controllers/todo');


mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/mongooseDemo')

app.use(express.json());
app.use(express.urlencoded());
app.use(express.logger());
app.set('view engine','ejs');
app.set('port', process.env.PORT || 3000);

app.get('/',todoController.index);
app.post('/',todoController.create);
app.put('/:todoId',todoController.update);
app.del('/:todoId',todoController.delete);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

//app.listen(port,function(err) {
//	console.log('listening on %s',port);
//});