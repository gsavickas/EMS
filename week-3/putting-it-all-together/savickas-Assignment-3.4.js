/*
============================================
; Title:  Exercise 3.4 - putting it all together
; Author: Grayton Savickas
; Date:   24 Jan 2021
; Modified By:
; Description: Logging
;===========================================
*/
const header = require('../../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 3.4 - putting it all together")
console.log(headerValue);

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function(request, response) {
  response.render("index", {
    message: "Starwars home page"
  });
});

app.get("/about", function(request, response) {
  response.render("about", {
    message: "Starwars about page"
  });
});

app.get("/contact", function(request, response) {
  response.render("contact", {
    message: "Starwars contact page"
  });
});

app.get("/products", function(request, response) {
  response.render("products", {
    message: "Starwars products page"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080.");
});
