/*
============================================
; Title:  Exercise 4.4 - curd operations
; Author: Grayton Savickas
; Date:   31 Jan 2021
; Modified By:
; Description: Crud Operations
;===========================================
*/
const header = require('../../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 4.4 - Crud Operations")
console.log(headerValue);

// start of program

var express = require('express');
var http = require('http');
var logging = require('morgan');

var app = express();

app.use(logging('dev'));

// will initiate a get request
app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.");
});

// will initiate a put request
app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.");
});

// will initiate a post request
app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request");
});

// will initiate a delete request
app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
