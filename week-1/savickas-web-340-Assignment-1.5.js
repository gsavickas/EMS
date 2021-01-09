/*
============================================
; Title:  Exercise 1.3 - Web 340 - Hello World
; Author: Grayton Savickas
; Date:   7 Jan 2021
; Modified By: 
; Description: program that create as page that is served to local port 8080
;===========================================
*/

const header = require('../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 1.5 - Hello World")
console.log(headerValue);

// Start of Program

// Variable declaration:
let http = require("http");

function processRequest(req, res) {

let body = "Hello World this is not quite the first time I have used node but a good refresher";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

let s = http.createServer(processRequest);

s.listen(8080);