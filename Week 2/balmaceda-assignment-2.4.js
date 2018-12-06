
/*
============================================
; Title:  Balmaceda-assignment-2.4
; Author: Professor Krasso 
; Date:   6 December 2018
; Modified By: Griselda Balmaceda
; Description: 
;===========================================
*/



const header = require('../header.js');

console.log(header.display("Griselda", "Balmaceda", "Week 2"));

function myName(firstName,LastName){

   let fullName= firstName +" " + LastName
    return fullName
}

function dateWriter(year,month,day){
   date= new Date(year,month,day);
   return date.toLocaleDateString('en-US');

}

function convertToInt(){


}


console.log('Hello my name is '+ myName('Griselda','Balmaceda')+'!')
console.log("Today's date is "+ dateWriter(2018,6,12) + " and the current temperature is 33.5 degrees.")
