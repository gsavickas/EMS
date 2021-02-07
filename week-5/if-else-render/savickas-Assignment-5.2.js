/*
============================================
; Title:  Exercise 5.2 - if else render
; Author: Grayton Savickas
; Date:   31 Jan 2021
; Modified By:
; Description: Crud Operations
;===========================================
*/
const header = require('../../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 5.2 - if else render")
console.log(headerValue);

// start of program

// requires statements
var express = require('express');
var http = require('http');
var path = require('path');

// server logic
var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// local array
var f = ['Orange', 'Banana', 'Blueberry', 'Grapefruit'];

// routes
app.get('/', function(req, res){
  res.render('index', {
    fruits: f
  });
});

// create server
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080.");
});
