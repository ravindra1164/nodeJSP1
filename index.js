var express = require('express');
var bodyPasrser = require('body-parser');
var morgan = require('morgan');
var config = require("./config");


var app = express();

app.use(bodyPasrser.urlencoded({ extended : true}));
app.use(bodyPasrser.json());
app.use(morgan("dev"));

app.get("*" , function(req , res){
	res.sendFile(__dirname + "/public/views/index.html");
}); 

app.listen(config.port, function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log("Listening on port " + config.port);
	}
} ); 