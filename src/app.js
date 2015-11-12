'use strict';
var express = require('express');
var app = express();
var http = require('./http_calls.js');
app.use(express.static(__dirname + '/css'));	//where static files will be
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');	//using Jade
app.get('/', function(req, res){
  res.render('index');
  console.log("Calling flickr api test...");
  //http.run(req,res);
  console.log("Exiting flickr api...")

});
app.get('/brandon',function(req,res){
    res.render('brandon');

});

app.listen(8000);
