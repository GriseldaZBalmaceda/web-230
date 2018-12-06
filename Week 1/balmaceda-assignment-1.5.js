/*
============================================
; Title:  Assignment 1.5
; Author: Griselda Balmaceda
; Date:   4 December 2018
; Description: This program demonstrates the
;   use of JavaScript types, values, and 
;   and variables in an application.
;===========================================
*/ 
 /*adding my information for this Assignment*/
var  myName="Griselda Balmaceda";
var assignment="Assignment 1.5";
var currentDate=new Date();

/* initializing all the variable names and their values */

var firstName1,firstName2,firstName3,firstName4,firstName5;
var lastName1,lastName2,lastName3,lastName4,lastName5;
var address1,address2,address3,address4,address5;
var pay1,pay2,pay3,pay4,pay5;
var hire1,hire2,hire3,hire4,hire5

firstName1="Bob";
firstName2="Mike";
firstName3="Steve";
firstName4="Frank";
firstName5="Pete";

lastName1="Builder";
lastName2="Flannigan";
lastName3="Martin";
lastName4="Ocean";
lastName5="Davidson";

address1="1234 Bob Drive Omaha,NE";
address2="1234 Mike Drive Omaha,NE";
address3="1234 Steve Drive Omaha,NE";
address4="1234 Frank Drive Omaha,NE";
address5="1234 Pete Drive Omaha,NE";

pay1=10.50;
pay2=11.40;
pay3=24.5;
pay4=12.30;
pay5=50.20;

hire1=new Date(2011,2,3);
hire2= new Date(2013,3,12);
hire3=new Date(2000,4,10);
hire4=new Date(2018,1,1);
hire5=new Date(1998,0,4);

/*outputting the information for this assignment*/
console.log(myName);
console.log(assignment);
console.log(currentDate.toLocaleDateString()+"\n");


console.log('Welcome to Assignment 1.5 \n')

/*outputting employee list*/
console.log('First Name: ' + firstName1);
console.log('Last Name: '+ lastName1);
console.log('Address: '+address1);
console.log('Pay Rate:$'+ pay1.toFixed(1));
console.log('Hire Date: '+ hire1.toLocaleDateString('en-US'));
console.log("\n");

console.log('First Name: ' + firstName2);
console.log('Last Name: '+ lastName2);
console.log('Address: '+address2);
console.log('Pay Rate:$'+ pay2.toFixed(1));
console.log('Hire Date: '+ hire2.toLocaleDateString('en-US'));
console.log("\n");

console.log('First Name: ' + firstName3);
console.log('Last Name: '+ lastName3);
console.log('Address: '+address3);
console.log('Pay Rate:$'+ pay3.toFixed(1));
console.log('Hire Date: '+ hire3.toLocaleDateString('en-US'));
console.log("\n");

console.log('First Name: ' + firstName4);
console.log('Last Name: '+ lastName4);
console.log('Address: '+address4);
console.log('Pay Rate:$'+ pay4.toFixed(1));
console.log('Hire Date: '+ hire4.toLocaleDateString('en-US'));
console.log("\n");

console.log('First Name: ' + firstName5);
console.log('Last Name: '+ lastName5);
console.log('Address: '+address5);
console.log('Pay Rate:$'+ pay5.toFixed(1));
console.log('Hire Date: '+ hire5.toLocaleDateString('en-US'));