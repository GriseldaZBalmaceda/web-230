/*
============================================
; Title:  Assignment 4.4
; Author: Griselda Balmaceda
; Date:   20 December 2018
; Description: Practicing Predicates
;===========================================
*/


const header = require('../balmaceda-header.js');

console.log(header.display("Griselda", "Balmaceda", "Assignment 4.4"));

console.log('\n')

var states=["Alabama","Nevada","California","Iowa","Nebraska"]

console.log("--Original Array--")

for(var i =0;i<states.length;i++){
    console.log(states[i])
}

console.log(states.sort(function(a,b){
    
    if(a<b){return -1}
    if(a>b){return 1}
    return 0;
    
}));
console.log("--Sorted Array--\n" +states)

function getState(val1,val2)

{
    if(val1 === val2){
        return true
    }
}

console.log("--State Selected--")
console.log(states.filter(function(el){
    return getState(el,"Iowa")
})[0]);

