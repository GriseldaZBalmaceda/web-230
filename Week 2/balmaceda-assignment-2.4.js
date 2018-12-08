/*
============================================
; Title:  Balmaceda-assignment-2.4
; Author: Professor Krasso
; Date:   6 December 2018
; Modified By: Griselda Balmaceda
; Description:
;===========================================
*/



const header = require('../balmaceda-header.js');

console.log(header.display("Griselda", "Balmaceda", "Week 2"));



//function myName created with parameters

function myName(firstName, LastName) {

  let fullName = firstName + " " + LastName
  return fullName
}

// function myName without parameters
// var myName=function(){
//    var firstName="Griselda"
//    var LastName="Balmaceda"
//    var fullName= firstName +" " + LastName
//     return fullName
// }



// function dateWriter declaration
function dateWriter(year, day, month) {
  date = new Date(year, day, month);
  return date.toLocaleDateString('en-US');

}

// function formatNumber with parameters
function formatNumber(number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

function convertToInt(string) {
  return parseInt(string)
}

function convertToFloat(string) {
  return parseFloat(string)
}
console.log('\n')
console.log('Hello my name is ' + myName('Griselda', 'Balmaceda') + '!')
console.log("Today's date is " + dateWriter(2018, 6, 12) + " and the current temperature is " + formatNumber(345.6578, 1) + " degrees.")
console.log("I am " + convertToInt('21') + ' years old and my savings account goal is ' + convertToFloat('657.43') + " dollars")

/* a little testing magic*/

/***Testing myName function  */
console.log('\n');
console.log('Test myName Variables')
console.log(myName('Brady','Brunch'));
console.log(myName('Bob','Builder'));
console.log(myName('Harry','Potter'));
console.log(myName('Veronica','Mars'));
console.log(myName('Mike','Ike'));

/***Testing dateWriter */
console.log('\n');
console.log('Test DateWriter Variables')
console.log(dateWriter(2018,2,5))
console.log(dateWriter(2018,12,6))
console.log(dateWriter(2002,8,4))
console.log(dateWriter(2003,5,5))
console.log(dateWriter(1998,1,5))

/**Testing formatNumber */
console.log('\n');
console.log('Test formatNumber Variables')
console.log(formatNumber(4536.65477,5))
console.log(formatNumber(455.654,2))
console.log(formatNumber(4536.65477,5))
console.log(formatNumber(4536.65477,5))
console.log(formatNumber(4536.65477,5))

 /**Testing convertToInt */
console.log('\n');
console.log('Test convertToInt Variables')
console.log(convertToInt('56'));
console.log(convertToInt('23'));
console.log(convertToInt('45'));
console.log(convertToInt('49'));
console.log(convertToInt('84'));


/**Testing convertToFloat */
console.log('\n');
console.log('Test convertToFloat Variables')
console.log(convertToFloat('458.8788'));
console.log(convertToFloat('456.78'));
console.log(convertToFloat('31.48685'));
console.log(convertToFloat('2.487'));
console.log(convertToFloat('4868.457'));
