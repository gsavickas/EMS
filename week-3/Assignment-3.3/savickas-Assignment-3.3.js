/*
============================================
; Title:  Exercise 3.3 - Singleton Pattern
; Author: Grayton Savickas
; Date:   17 Jan 2021
; Modified By:
; Description: Tests out using Singleton Pattern
;===========================================
*/
const header = require('../../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 3.3 - Singleton Pattern")
console.log(headerValue);
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program
var DatabaseSingleton = (function() {
    var instance;
  function createInstance() {
      var postgresDatabase = new Object("Database instance initialized!");
      return postgresDatabase;
  }

  return {
      getInstance: function() {
        if (!instance) {
          instance = createInstance();
  }
      return instance;
     }
  }
})();

function databaseSingletonTest(){
  var oracle = DatabaseSingleton.getInstance();
  var postgres = DatabaseSingleton.getInstance();

  console.log("Same database instance? %s ", oracle === postgres);
}

databaseSingletonTest();

// end program
