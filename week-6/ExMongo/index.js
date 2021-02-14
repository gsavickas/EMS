/*
============================================
; Title:  Exercise 6.3 - Mongoose and MongoDB
; Author: Grayton Savickas
; Date:   24 Jan 2021
; Modified By:
; Description: Connecting to a Mongo Database
;===========================================
*/
const header = require('../../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 3.3 - Advanced Routing")
console.log(headerValue);

// const username = process.argv[2].split('=')[1]
// console.log(`Hello, ${username}`)

// imports / requirements
var mongoose = require('mongoose');
var mongoDB = require('mongoDB');
var logger = require('morgan');
var express = require('express');
var http = require('http');

// MongoDB atlas database connection string
const conn = "mongodb+srv://dbUser-gss:wANRMmT7OFBXFO2g@mando21.06wom.mongodb.net/dbUser-gss?retryWrites=true&w=majority"

// this connects to the database
mongoose.connect(conn, {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connection to the database instance was successful');
}).catch(err => {
  console.log(`MongoDB Error: ${err.message}`);
});

// this is the application
var app = express();
app.use(logger("short"));

// this creates the server
http.createServer(app).listen(8000, function(){
  console.log("Application connected to port 8000.");
});
