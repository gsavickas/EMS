/*
============================================
; Title:  Exercise 7.3 Chai
; Author: Grayton Savickas
; Date:   21 Feb 2021
; Modified By:
; Description: Chai
;===========================================
*/
const header = require('../../../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 7.3 Chai")
console.log(headerValue);

const fruits = require("../Savickas-fruits");

const chai = require("chai");
const assert = chai.assert;

describe("fruits", function() {
  it("should return an array of fruits", function() {
    const g = fruits("Apple,Orange,Mango");
    assert(Array.isArray(g));
  });
});
