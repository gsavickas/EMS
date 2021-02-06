/*
============================================
; Title:  Exercise 5.3 - Pug
; Author: Grayton Savickas
; Date:   31 Jan 2021
; Modified By:
; Description: Pug examples
;===========================================
*/
const header = require('../../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 5.3 - Pug")
console.log(headerValue);

// start of program

//requirement statements
var express = require('express');
var http = require('http');
var path = require('path');
var pug = require('pug');

var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

// routes
app.get('/', function(req, res){
  res.render('index', {
    message: "Ask not what your country can do for you. But what you can do for your country. -J.F. Kennedy"
  });
});

http.createServer(app).listen(8000, function(){
  console.log("Host started and listening on port 8000");
});
