/*
============================================
; Title:  Assignment 5.3
; Author: Griselda Balmaceda
; Date:   9 January 2019
; Description: Object Collections
;===========================================
*/

const header = require('../balmaceda-header.js');

console.log(header.display("Griselda", "Balmaceda", "Assignment 5.3"));

console.log('\n')

var composers= [
    {
        lastName:'Beethoven',
        genre:'Classical',
        rating:8,

    },

    {
        lastName:'Mozart',
        genre:'Classical',
        rating:10,
    },

    {
        lastName:"Bach",
        genre:"Classical",
        rating:9,
    },
    {
        lastName:"Hayden",
        genre:"Classical",
        rating:6,  
    },
    {
        lastName:"Schubert",
        genre:"Classical",
        rating:5,  
    }
]

composers.forEach(function(composer){
    console.log(composer.lastName +", "+ composer.genre+", "+composer.rating +"\n" )
})