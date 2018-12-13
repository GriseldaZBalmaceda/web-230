/*
============================================
; Title:  Assignment 3.2
; Author: Griselda Balmaceda
; Date:   12 December 2018
; Description: Utilizing pattern matching functions for logical error handling
;===========================================
*/
const header = require('../balmaceda-header.js');

console.log(header.display("Griselda", "Balmaceda", "Assignment 3.2"));

var test1="Truck";
var test2="Car";
var test3="Bike";
var test4="Bike";
var test5="Four";
var test6="Three";

//match,logMisMatch,logMatch functions
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


//outputting true or false from match function
console.log('\n')
console.log(match(test1,test2));
console.log(match(test3,test4));
console.log(match(test5,test6));

//outputting logMisMatch and logMatch outputs for match function
console.log('\n')
if(match(test1,test2)){
  logMatch(test1,test2);
}else{
  logMisMatch(test1,test2);
}
if(match(test3,test4)){
  logMatch(test3,test4);
}else{
  logMisMatch(test3,test4);
}
if(match(test5,test6)){
  logMatch(test1,test2);
}else{
  logMisMatch(test5,test6);
}
