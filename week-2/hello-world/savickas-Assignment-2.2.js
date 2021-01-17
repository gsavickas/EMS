/*
============================================
; Title:  Exercise 2.2 - Hello World with Express
; Author: Grayton Savickas
; Date:   15 Jan 2021
; Modified By: 
; Description: Tests out using Express
;===========================================
*/
const header = require('../../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 2.2 - Hello World with Express")
console.log(headerValue);

var express = require("express");
var http = require("http");

var app = express();

app.use(function(request, response){
    console.log("In comes a request to: " + request.url);
    response.end("Hello, world!");
});

http.createServer(app).listen(8080);