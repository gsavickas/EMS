/*
============================================
; Title:  Exercise 3.2 - Factory Pattern
; Author: Grayton Savickas
; Date:   17 Jan 2021
; Modified By:
; Description: Tests out using Factory Pattern
;===========================================
*/
const header = require('../../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 3.2 - Factory Pattern")
console.log(headerValue);
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

function Oracle(properties){
  this.username = properties.username || 'admin';
  this.password = properties.password || 'password123';
  this.server = properties.server || 'localhost:3000';
  this.version = properties.version || '4.2.0';
}

function Informix(properties){
  this.username = properties.username || 'admin';
  this.password = properties.password || 'password456';
  this.server = properties.server || 'localhost:3300';
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } if (properties.databaseType === "MySQL") {
        this.databaseClass = MySql;
    } if (properties.databaseType === "Oracle"){
        this.databaseClass = Oracle;
    } if (properties.databaseType === "Informix"){
        this.databaseClass = Informix;
    }


    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

// New oracle object
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
   databaseType: "Oracle",
   username: "admin",
   password: "password123"
});

// New informix object
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "admin",
  password: "password123"
});

// Output for functions
console.log(oracle);
console.log(informix);





// end program


