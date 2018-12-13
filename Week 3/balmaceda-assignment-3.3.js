/*
============================================
; Title:  Assignment 3.2
; Author: Griselda Balmaceda
; Date:   13 December 2018
; Description: Using a swtich statement block
;===========================================
*/
const header = require('../balmaceda-header.js');

console.log(header.display("Griselda", "Balmaceda", "Assignment 3.3"));

console.log('\n')

let eventKeyCode = 13;

switch(eventKeyCode){
    case 13:
    console.log("The enter key was pressed.")
    break;

    case 16: 
    console.log("The shift key was pressed.")
    break;

    case 32:
    console.log("The spacebar key was pressed.")
    break;

    case 8:
    console.log("The backspace key / delete key was pressed.")
    break;

    default:
    console.log('Unrecognized key')

}



