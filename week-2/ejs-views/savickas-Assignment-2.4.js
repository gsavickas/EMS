/*
============================================
; Title:  Exercise 2.4 - EJS
; Author: Grayton Savickas
; Date:   16 Jan 2021
; Modified By: 
; Description: Tests out using EJS
;===========================================
*/
const header = require('../../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 2.4 - EJS")
console.log(headerValue);

var express = require("express");
var http = require("http");
var path = require("path");
var app = express();

app.set("view engine", "ejs");