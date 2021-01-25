/*
============================================
; Title:  Exercise 3.2 - Logging
; Author: Grayton Savickas
; Date:   15 Jan 2021
; Modified By:
; Description: Logging
;===========================================
*/
const header = require('../../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 3.2 - Logging")
console.log(headerValue);

// imports / requires
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));
app.get("/", function(req, res) {
  res.render("index", {
    message: "Welcome to the Morgane Logger Jungle!"
  });
});
http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080");
});
