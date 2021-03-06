/*
============================================
; Title:  Assignment 3.4
; Author: Griselda Balmaceda
; Date:   12 December 2018
; Description: Practicing for loops and if/else statments
;===========================================
*/


const header = require('../balmaceda-header.js');

console.log(header.display("Griselda", "Balmaceda", "Assignment 3.4"));

console.log('\n')

let num = 6;

for (var i = 0; i < 10; i++) {

  let num2 = Math.floor((Math.random() * 10) + 1)
   match(num, num2)
  if (match(num, num2)) {
    logMatch(num, num2);
  } else {
    logMisMatch(num, num2);
  }
}

function match(param1, param2) {
  if (param1 === param2) {

    return true
  } else {

    return false
  }
}

function logMisMatch(param1, param2) {
  console.log(param1 + " does not match " + param2 + '!');
}

function logMatch(param1, param2) {
  console.log(param1 + " does match " + param2 + '!');
}
