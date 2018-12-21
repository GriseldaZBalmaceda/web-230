/*
============================================
; Title:  Assignment 4.3
; Author: Griselda Balmaceda
; Date:   20 December 2018
; Description: Practicing JavaScript Arrays with Filter
;===========================================
*/


const header = require('../balmaceda-header.js');

console.log(header.display("Griselda", "Balmaceda", "Assignment 4.3"));

console.log('\n')


var vehicles=["car","motorcycle","truck","bus","bike"]

function getValue(array,string){

    for(var i=0;i<array.length;i++){
        if(array[i] === string){
         return array[i]
        }
     
    }


}

for(var i=0;i<vehicles.length;i++)
{
  console.log(vehicles[i])
}

console.log("\n")
console.log("--Selected Value--")
console.log(getValue(vehicles,"car"));

console.log("\n")
console.log("--Selected Value--")
console.log(getValue(vehicles,"truck"));