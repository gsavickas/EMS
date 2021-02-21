/*
============================================
; Title:  Exercise 5.4 - UI Dev with EJS
; Author: Grayton Savickas
; Date:   06 Feb 2021
; Modified By:
; Description: Development of UI elements in EJS
;===========================================
*/
const header = require('../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 5.4 - UI Dev with EJS")
console.log(headerValue);

// start of program

var express = require('express');
var http = require('http');
var path = require('path');
var logging = require('morgan');

// server logic with EJS
var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
