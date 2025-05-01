// Numbers
const score = 100;
console.log(score); // 100

// now in the above statement JS knows that this has to be treated as number. but we can also define a number explicitly.
const balance = new Number(33);
console.log(balance); // Number {33}

console.log(balance.toString().length); // we can convert number to a string using toString() method, and in that manner we get access to n number of other methods that string is having

console.log(balance.toFixed(2)); // ensures that only two digits are coming after decimal

// toPrecision() => this method takes up argument raging from number 1-21, and it returns a string
let otherNumber = 23.8966;

console.log(otherNumber.toPrecision(3)); // 23.9 => from the start it gives precision, till 23.8(966) , so because of 966, the resultant value was rounded off, and hence precision got applied on three values resulting 23.9 as answer

otherNumber = 123.8966; 
console.log(otherNumber.toPrecision(3)); // 124 => now here precision was to be applied at 123 and because of other values present after decimal, the final value was rounded off.

otherNumber = 1123.8966; 
console.log(otherNumber.toPrecision(3)); // 1.12e+3 => till 112 precision worked but after that we had decimal even after one more value, so everything else was converted to exponential format

// ===========================================

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // 1,000,000 => the number will be returned in string format and ofcourse in a readable one. by default this is in US format

console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 => in this way we can convert it to Indian format

// ===========================================

// maxValue and minValue are also there
let minNum = Number.MIN_VALUE;
let maxNum = Number.MAX_VALUE;


// ++++++++++++++++++++++++++++++++++++++      MATH     +++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math); // it is an object having various properties and methods like pi, sqrt(), pow(), etc.

console.log(Math.abs(-4)); // 4 => absolute method is used to change negative values to positive ones
console.log(Math.round(4.3)); // 4 => rounds of the value on the basis of the value present after the decimal
console.log(Math.round(4.5)); // 5
console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.sqrt(25)); // 5
console.log(Math.pow(2,3)); // 2^3 = 8
console.log(Math.min(4,3,6,7,2)); // 2
console.log(Math.max(11,21,3,55,7,77)); // 77

// ========== random() method =========

// everytime we will run this method, we will get a random value ranging from 0 to 1
console.log(Math.random()); // 0.6034326419237361 => this type of values will be there

// Now , when we work for certain problem statements, then at that time, we require random numbers in a particular range only, let's se dice roller should only give numbers from 1-6, so for that we can see the steps below:
console.log(Math.random() * 10); // through this, we will start getting values in such a way that decimal will shift one place further => 6.034326419237361 (something like this)

// now there might be a value in this format 0.0456, so to avoid this, we will add 1 to our random value
console.log(Math.floor((Math.random() * 10)) + 1);

// Formula
const min = 10;
const max = 20;

// if we want to get random number in a range of 10 to 20 or any specified range, we can use below formula
console.log(Math.floor((Math.random() * (max - min +1))) + min);

