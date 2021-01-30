/*
============================================
; Title:  Exercise 4.2 - JSON APIs
; Author: Grayton Savickas
; Date:   29 Jan 2021
; Modified By:
; Description: JavaScript Object Notation
;===========================================
*/
const header = require('../../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 4.2 - JSON APIs")
console.log(headerValue);

// start of program

var express = require('express');
var http = require('http');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));

// Gets user traveling to this path a json with employee info
app.get('/customer/:id', function(req, res){

  var id = parseInt(req.params.id, 10);

  res.json({
    firstName: 'Keanu',
    lastName: 'Reeves',
    employeeId: id,
    chosenOne: true
  });

});

http.createServer(app).listen(3000, function(){
  console.log('App has started and listening on port 3000!')
});
