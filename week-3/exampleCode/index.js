var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();

app.use(function(req, res, next){
  console.log("Request IP: " + req.url);
  console.log("Resquest date: " + new Date());
  next();
});

app.listen(8080, function(){
  console.log("App started on port 8080");
})
