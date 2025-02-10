// Type conversion: this is needed because most of the time we are fetching values from the backend and we don't know what type of value is given to us. In that case, we need to convert the datatype of values in our desired type.

let score = 33;

console.log(typeof score); // number

let score1 = "35";

console.log(typeof score1); // string

// to convert any datatype into number type, we use Number()
let valueInNumber = Number(score1);

console.log(typeof valueInNumber); // number


// Now, this is not necessary that value which is coming from the backend will always be any predictable value, let's say that we got a string "33a", so let's try converting it to number
let score2 = "33a";

let valueInScore2 = Number(score2);
console.log(typeof valueInScore2); // number

// here we need to notice that, when we converted "33a" to a number, there is no error, and we can even check the type of the value, it is number, but when we try to print that number, let's see what happens:

console.log(valueInScore2); // NaN (not a number) => this is also a special type of value. so whenever we try to convert any value which will not possibly get converted in a proper number (integer, etc.) then it gets converted to this NaN, and type of NaN is number itself


// some interview questions
let val = null;
console.log(typeof null); // object
console.log(Number(val)); // 0

let val2 = undefined;
console.log(typeof undefined); // undefined
console.log(Number(val2)); // NaNs

console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("Shivani")); // NaN

// Boolean conversion
let loggedIn = 1;
console.log(Boolean(loggedIn)); // true

loggedIn = 0;
console.log(Boolean(loggedIn)); // false

loggedIn = "";
console.log(Boolean(loggedIn)); // false

loggedIn = "shivani";
console.log(Boolean(loggedIn)); // true

// String conversion
let something = 33;
console.log(String(something));
console.log(typeof(String(something)));

something = undefined;
console.log(String(something)); // undefined 

something = null;
console.log(String(something)); // null

something = NaN;
console.log(String(something)); // NaN