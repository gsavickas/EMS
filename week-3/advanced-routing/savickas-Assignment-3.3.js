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

// Set up dependance / imports
var express = require("express");
var http = require("http");
var path  =require("path");
var logger = require("morgan");
var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/:productId", function(request, response) {

  var productId = parseInt(request.params.productId, 10);

   response.render("index", {

      productId: productId

  })

});

http.createServer(app).listen(8080, function() {

 console.log("Application started on port 8080");

});
