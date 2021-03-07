/*
============================================
; Title:  Exercise 7.4
; Author: Grayton Savickas
; Date:   21 Feb 2021
; Modified By:
; Description: Development of UI elements in EJS
;===========================================
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true}
})

module.exports = mongoose.model('Employee', EmployeeSchema);
