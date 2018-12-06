/*
============================================
; Title:  Balmaceda-assignment-2.3
; Author: Professor Krasso 
; Date:   5 December 2018
; Modified By: Griselda Balmaceda
; Description: Demonstrates how to define and call property functions
;===========================================
*/
const header = require('../header.js');

console.log(header.display("Griselda", "Balmaceda", "Week 2"));


function myName(){
myName.griselda="Griselda Balmaceda"
return myName.griselda;
}
console.log("Hello " + myName() +'!')
