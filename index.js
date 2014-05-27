var express = require('express'),
	app = express(),
	port = process.env.PORT || 4040;

app.get("/",function(req,res) {
	res.send("my first app on Heroko!");
});


app.listen(port);