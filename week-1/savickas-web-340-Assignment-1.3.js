/*
============================================
; Title:  Exercise 1.3 - Web 340 - Modules
; Author: Grayton Savickas
; Date:   7 Jan 2021
; Modified By: 
; Description: program that uses node to parse a url
;===========================================
*/

const header = require('../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 1.3 - Modules")
console.log(headerValue);

// Start of Program

// I looked up the Node 15 documentation and this is the new URL object that we can use instead of the parse method 
let url1 = new URL('https:www.example.com/profile?name=savickas');

// Output
console.log(url1.protocol);
console.log(url1.host);
// I had to change this from to .search method
console.log(url1.search);