/*
============================================
; Title:  Assignment 6.3
; Author: Griselda Balmaceda
; Date:   18 January 2019
; Description: creating nested object
;===========================================
*/

const header = require('../balmaceda-header.js');

console.log(header.display("Griselda", "Balmaceda", "Assignment 6.4"));

console.log('\n')

// creating object with nested object
var ticket = {
    id:1056,
    name:"Ticket",
    dateCreated: new Date().toLocaleDateString('en-US'),
    priority:"pretty important",

    person:{
      id:1234,
      firstName:"Bob",
      lastName:"Jones",
      jobTitle:"Programmer I"
    }
}

//outputting nested object property using dot notation.
console.log(ticket.name +" " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to " + ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ").")