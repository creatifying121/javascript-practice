# JavaScript | Basic to advanced

## Console
Console is an API provided by Browsers, we can display text on it.
```js
console.log("Hello world");
```
The above statement will print Hello world on the console.
---------------------------
---------------------------

## Variables in JS
Variables are basically a container/placeholder that hold our data. Let's say we are creating an e-commerce application, and we are adding product to cart, then JS should store the information of that product. So, to store this information, we will be needing a variable.
```js
// creating a variable
var name;
var message;
```
We have three ways to create variables in JavaScript:
- var
- let
- const

```js
var message = "hello there";
let age = 24;
const dateOfBirth = '22/03/2000';

console.log(message); // hello there
```
Advantage of using variables is, let's say I have to log hello there again and again on different places in my code, so I can simply store it into a variable and use it as many times as I want.

Let's say at later point of time I want to change the message from "hello there" to "hello everyone", so it will be convinient to make a change on a single place only (i.e. in the variable we declared), rather than going everywhere in the code and updating that.
```js
message = "hello everyone";

console.log(message); // hello everyone
```
Some terminologies that we should be aware of:
```js
let text; // creating or declaring a variable

text = "JavaScript is fun!"; // assigning value to variable or defining a variable or initializing value in variable
```
We use `const` to declare constant values (values that will not change). Let's say the color of sky.
```js
const sky = "blue"; // we have to provide value for this const variable at the time of declaration itself

sky = "red"; // this will be an error, as the value of const cannot change
```
---------------------------
---------------------------

## Difference between var, let & const
```js
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
```
- with var, value can be updated, same variable name can be redeclared n number of times. let is a bit more stricter, cannot redeclare variable using let with same variable name, value can be updated. const is the strictest, it does not allow to update the value also, redeclaration is not possible there

- which variable to use? var should never be used. let and const are used these days. When we want to have values that cannot change throughout the code, go with const, otherwise go with let.