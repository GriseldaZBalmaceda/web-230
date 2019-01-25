/*
============================================
; Title:  Assignment 6.4
; Author: Griselda Balmaceda
; Date:   24 January 2019
; Description: 
;===========================================
*/

const header = require('../balmaceda-header.js');

console.log(header.display("Griselda", "Balmaceda", "Assignment 7.2"));

console.log('\n')
//creating constructor/ object literal as a function
function Employee(id,firstName,lastName,title){
    this.id=id;
    this.firstName=firstName;
    this.lastName=lastName;
    this.title=title
}

//populting an array with objects based off the Employee constructor
var employeeArray=[
    new Employee (0666,'Thomas','Edison','Software Engineer'),
    new Employee (2334,'Benjamin','Franklin','Programmer'),
    new Employee (4535,'Nikola','Tesla','Project Manajer'),
    new Employee (5456,'Charles','Babbage','Product Manager'),
    new Employee (4365,'Alexander','Bell','Business Analyst')


]
//outputting the employeeArray array 
employeeArray.forEach(function(x,index){
    console.log((index+1),x.firstName,x.lastName,x.title)
})