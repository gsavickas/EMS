/*
============================================
; Title:  Exercise 3.3 - Advanced Routing
; Author: Grayton Savickas
; Date:   24 Jan 2021
; Modified By:
; Description: Routing
;===========================================
*/
const header = require('../../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 3.3 - Advanced Routing")
console.log(headerValue);


var express= require("express");
var path = require("path");

var app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(3000);
