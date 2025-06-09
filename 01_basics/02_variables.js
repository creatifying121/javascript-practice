/*var message = "hello there";
let age = 24;
const dateOfBirth = '22/03/2000';

console.log(message); // hello there
console.log(age); // 24
console.log(dateOfBirth); // 22/03/2000

let text; // creating or declaring a variable
text = "JavaScript is fun!";

const sky = "blue"; // we have to provide value for this const variable at the time of declaration itself
// sky = "red"; // this will be an error, as the value of const cannot change
*/


// ===============================================

// Difference between var, let & const
var msg = "hello";
msg = "hi"; // we can reassign value to var variable
console.log(msg); // hi

var msg = 12; // variable with same name can again be declared using var
console.log(msg); // 12

// let
let mm = 'hello ji';
console.log(mm);

mm = 124; // this is possible
console.log(mm); 

// let mm = 'heyyy'; // this is not possible : Error => we cannot redeclare variable created using let (block scoped variable)

// const
const mssgg = 'hello there';
// mssgg = 'heyyaaa'; // error: assignment to a constant variable
console.log(mssgg);

// const mssgg = 'heyy there'; // this is also not possible for the same reason as let

// with var, value can be updated, same variable name can be redeclared n number of times. let is a bit more stricter, cannot redeclare variable using let with same variable name, value can be updated. const is the strictest, it does not allow to update the value also, redeclaration is not possible there

// which variable to use? var should never be used. let and const are used these days. When we want to have values that cannot change throughout the code, go with const, otherwise go with let.