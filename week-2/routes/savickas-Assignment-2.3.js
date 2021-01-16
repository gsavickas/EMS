/*
============================================
; Title:  Exercise 2.3 - Routes
; Author: Grayton Savickas
; Date:   15 Jan 2021
; Modified By: 
; Description: Tests out routing with Node & Express
;===========================================
*/
const header = require('../../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 2.3 - Routes")
console.log(headerValue);

var express = require("express");
var http = require("http");

var app = express();

app.get("/",function(req, res){
    res.end("Welcome to the Jungle Homepage!");
});

app.get("/about",function(req, res){
    res.end("Welcome to the about the jungle page!");
});

app.get("/contact",function(req, res){
    res.end("Welcome to the contact the jungle page!");
});

app.use(function(req, res){
    res.statusCode = 404;

    res.end("404!");
});

http.createServer(app).listen(8080);