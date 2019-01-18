/*
============================================
; Title:  Assignment 6.2
; Author: Griselda Balmaceda
; Date:   18 January 2019
; Description: The try,catch,and finally block. 
;===========================================
*/
const header = require('../balmaceda-header.js');

console.log(header.display("Griselda", "Balmaceda", "Assignment 6.2"));

console.log('\n')
// creating my try block
try {
    var x=8;
    var y=4;
    var sum = x + y;

// creating an exception
    if (sum%2===0)
    throw "EvenNumberException"
    console.log(sum)

    //catching the error in my catch clause
} catch(err){
    console.log("Catch Clause: " + err)
}
finally {
    console.log("Finally clause reached ...");
}