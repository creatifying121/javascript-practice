// there is a difference between older and today's javascript, earlier we didn't have classes, modules, arrow functions, etc. but we already have a lot of code in older version of js, and the committee of js decided not to leave behind the legacy code since new one is used. and if the new version is being used, then we must have a standard, so that all code should be treated as new code. for that we activate the strict mode

"use strict"; // activating the strict mode

// whenever we are stuck somewhere, there are two documents to follow:
// 1. mdn docs
// 2. javascript official documentation (https://tc39.es)

// Datatypes in JS
let name = "Shivani"; // string

let age = 24; // number

let isLoggedIn = true; // boolean

// we have bigInt (for the numbers which are veryy large)
// null => standalone value as well as a datatype => representation of an empty value
// undefined => this is also a value as well as datatype => this means the variable is declared, but no value is defined in it.
// symbol => to find out uniqueness in a particular component


// Object => everything apart from Primitive datatype, are the objects

// typeof
console.log(typeof 'Shivani');

console.log(typeof age);

console.log(typeof null); // Object

console.log(typeof undefined); // undefined