/*
============================================
; Title:  Assignment 3.4
; Author: Griselda Balmaceda
; Date:   12 December 2018
; Description: Practicing for loops and if/else statments
;===========================================
*/


const header = require('../balmaceda-header.js');

console.log(header.display("Griselda", "Balmaceda", "Assignment 3.3"));

console.log('\n')

let num=6;

for(var i =0;i<9;i++){

    function randomNumber() {
        return Math.floor((Math.random() * 10) + 1)
      }
}

function match(param1,param2){
    if (param1===param2){
    
    return true
    }
    else {
    
      return false
    }
    }
    
    
    function logMisMatch(param1,param2){
      console.log(param1 + " does not match " + param2 + '.');
    }
    function logMatch(param1,param2){
      console.log(param1 + " does match " + param2 + '.');
    }
    