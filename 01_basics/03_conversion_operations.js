// Type conversion: this is needed because most of the time we are fetching values from the backend and we don't know what type of value is given to us. In that case, we need to convert the datatype of values in our desired type.

let score = 33;

// console.log(typeof score); // number

let score1 = "35";

// console.log(typeof score1); // string

// to convert any datatype into number type, we use Number()
let valueInNumber = Number(score1);

// console.log(typeof valueInNumber); // number


// Now, this is not necessary that value which is coming from the backend will always be any predictable value, let's say that we got a string "33a", so let's try converting it to number
let score2 = "33a";

let valueInScore2 = Number(score2);
// console.log(typeof valueInScore2); // number

// here we need to notice that, when we converted "33a" to a number, there is no error, and we can even check the type of the value, it is number, but when we try to print that number, let's see what happens:

// console.log(valueInScore2); // NaN (not a number) => this is also a special type of value. so whenever we try to convert any value which will not possibly get converted in a proper number (integer, etc.) then it gets converted to this NaN, and type of NaN is number itself


// some interview questions
let val = null;
// console.log(typeof null); // object
// console.log(Number(val)); // 0

let val2 = undefined;
// console.log(typeof undefined); // undefined
// console.log(Number(val2)); // NaNs

// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number("Shivani")); // NaN

// Boolean conversion
let loggedIn = 1;
// console.log(Boolean(loggedIn)); // true

loggedIn = 0;
// console.log(Boolean(loggedIn)); // false

loggedIn = "";
// console.log(Boolean(loggedIn)); // false

loggedIn = "shivani";
// console.log(Boolean(loggedIn)); // true

// String conversion
let something = 33;
// console.log(String(something));
// console.log(typeof(String(something)));

something = undefined;
// console.log(String(something)); // undefined 

something = null;
// console.log(String(something)); // null

something = NaN;
// console.log(String(something)); // NaN


// ********************************** OPERATIONS **********************************
let value = 3;
let negValue = -value;

// console.log(negValue); // -3

// some other basic operations
// console.log(2+2); // 4
// console.log(2-2); // 0
// console.log(2*2); // 4
// console.log(2/2); // 1
// console.log(2%2); // 0
// console.log(2**4); // 16

// concatenating strings
let str1 = "hello ";
let str2 = "shivani";

let str3 = str1 + str2; 

// console.log(str3); // hello shivani

// TYPE COERCION CONCEPT
// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

console.log(+true); // 1
// console.log(true+); //

console.log(+""); // 0

// ASSIGNMENT OPERATOR

let num1, num2, num3;
num1 = num2 = num3 = 2 + 4; // bad practice to declare/define any variable

let gameScore = 100;
// gameScore++; // postfix
// console.log(gameScore); // 101

++gameScore; // prefix
console.log(gameScore); // 101 

/*
    Explanation of Post-Increment (x++)
    
    - The post-increment operator (x++) first returns the current value of x and then increments it.
    - This means the variable gets assigned the original value before the increment happens.
*/

console.log("------ Post-Increment Example ------");

// Initialize x
let x = 3;
console.log(`Initially, x = ${x}`);

// Post-increment operation
const y = x++;  // y is assigned the original value of x (3), then x is incremented

// Displaying the results
console.log(`After executing 'const y = x++':`);
console.log(`x: ${x}, y: ${y}`);

/*
    Step-by-Step Execution:
    1. let x = 3;  --> x is initialized with 3.
    2. const y = x++; 
       - y gets the current value of x (which is 3).
       - x is then incremented by 1, making it 4.
    3. console.log prints x:4, y:3.
*/

/*
    Pre-Increment Example for Comparison
    - The pre-increment (++x) first increments x and then returns the new value.
*/

console.log("\n------ Pre-Increment Example ------");

// Reset x
x = 3;
console.log(`Initially, x = ${x}`);

// Pre-increment operation
const z = ++x;  // x is incremented first, then assigned to z

// Displaying the results
console.log(`After executing 'const z = ++x':`);
console.log(`x: ${x}, z: ${z}`);

/*
    Step-by-Step Execution:
    1. x = 3;
    2. const z = ++x;
       - x is first incremented to 4.
       - Then, the new value (4) is assigned to z.
    3. console.log prints x:4, z:4.
*/

// console.log("\n------ Summary ------");
// console.log("Post-increment (x++): Assigns the original value, then increments.");
// console.log("Pre-increment (++x): Increments first, then assigns the new value.");


