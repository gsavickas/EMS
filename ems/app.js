/*
============================================
; Title:  Exercise 5.4 - UI Dev with EJS
; Author: Grayton Savickas
; Date:   06 Feb 2021
; Modified By:
; Description: Development of UI elements in EJS
;===========================================
*/

// start of program

var express = require('express');
var http = require('http');
var path = require('path');
var logging = require('morgan');

// server logic with EJS
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

const fruits = ["Apple", "Blueberry", "Orange", "Strawberry"];

app.get('/', function(req, res){
  res.render('index',{
    fruits: fruits
  });
});

http.createServer(app).listen(3000, function(){
console.log("Server has started on port 3000");
});
