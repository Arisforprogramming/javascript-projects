const input = require('readline-sync');

// let name = input.question("Enter your name: ");
// console.log("Hello " + name + ", beautifu, her name is" + name);
let firstName = input.question("Enter your first name: ");
let lastName = input.question("Enter your last name: ");
let combineName = firstName +','+ lastName ;
//console.log("First name : " + firstName +"\nLast name: " + lastName +"\nLast, First "+ lastName + ',' + firstName);
console.log ("\nFirst name : " + firstName +"\nLast name: " + lastName +"\nLast, First: "+ combineName);