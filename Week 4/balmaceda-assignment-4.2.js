/*
============================================
; Title:  Assignment 4.2
; Author: Griselda Balmaceda
; Date:   20 December 2018
; Description: Practicing JavaScript Arrays 
;===========================================
*/


const header = require('../balmaceda-header.js');

console.log(header.display("Griselda", "Balmaceda", "Assignment 4.3"));

console.log('\n')

var fruit=["apple","orange","banana","pineapple","grapes"]
var fruits=""

function getFruit(array){


for(var i=0;i<array.length;i++){
     fruits += array[i] +"\n"
   
}
return fruits; 
}

console.log(getFruit(fruit))