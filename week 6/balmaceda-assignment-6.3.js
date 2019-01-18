/*
============================================
; Title:  Assignment 6.3
; Author: Griselda Balmaceda
; Date:   18 January 2019
; Description: Stringifying an object 
;===========================================
*/
const header = require('../balmaceda-header.js');

console.log(header.display("Griselda", "Balmaceda", "Assignment 6.3"));

console.log('\n')

// creating ticket object literal

var ticket={
id:1111,
name:"Harrison County",
requestor:"Judge Judy"
}

//stringigying the object
ticket = JSON.stringify(ticket)

//removing the quotes around the property names and outputting the object
ticket = ticket.replace(/\"([^(\")"]+)\":/g,"$1:")
console.log(ticket)


