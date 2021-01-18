/*
============================================
; Title:  Exercise 2.4 - EJS
; Author: Grayton Savickas
; Date:   17 Jan 2021
; Modified By:
; Description: Tests out using EJS
;===========================================
*/
const header = require('../../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 2.4 - EJS")
console.log(headerValue);

var express = require("express");
var http = require("http");
var path = require("path");
var app = express();

// Shows the views
app.set('views', path.resolve(__dirname, '../views'))
app.set("view engine", "ejs");

app.get('/', function(req, res) {
  res.render('views', {
    message: 'Welcome to the homepage!'
  });
});

// app.get("/", function(require, response){
//     response.render("index.ejs",{
//       firstName:"Grayton",
//       lastName:"Savickas"
//     });
// });

http.createServer(app).listen(8080, function(){
  console.log("EJS-Views app started on port 8080.");
});

