// on the basis of how data is being stored and retrieved, we have two categories => Primitive & non-primitive

// Primitive datatypes (call by value => whenever we are going to use these, then we don't get the reference of memory here, these are being copied and provided to us, so whatever changes we are making it is not being made in actual variable but in the copied one) => String, Number, Boolean, Null, undefined, Symbol (to make any value unique), BigInt

const score = 100; // number type
const scoreValue = 100.3; // number type

const isLoggedIn = false; // boolean type

const temperature = null; // null type

let userEmail; // undefined type

let firstName = "Shivani"; // string type

// symbol uniquely identifies the values, below is one of the examples

// Also, a value is also returned of type symbol, while working with Symbol
const id = Symbol('010101');
const anotherId = Symbol('010101');

// so in above example, even if the values are same, still they won't be equal, we can verify it as below:
console.log(id === anotherId); // false

console.log(id); // Symbol(010101)

const bigNumber = 283728953784378374828873874838128837483743438n;
console.log(typeof bigNumber); // bigint



// Non-primitive (Reference types) (call by reference => whenever we are making any changes to any of these, then changes are being made in their memory reference itself) => Arrays, Objects, Functions

const arr = ['hello', 1, 2, true, null];

let obj = {
    myName: "shivani",
    age: 24
}


const myFunction = function(){
    console.log("hello ji, this is my first function");
}

// JavaScript is dynamically typed language => we need not to declare the datatype of the variable while defining the variable. it decides on its own, as per the value assigned to the variable.

// special case
console.log(typeof temperature); // object

/*
    JavaScript typeof Operator - Table of All Possible Values
*/

const values = [
    { Value: "Hello", Type: typeof "Hello" },
    { Value: 42, Type: typeof 42 },
    { Value: 3.14, Type: typeof 3.14 },
    { Value: NaN, Type: typeof NaN },
    { Value: Infinity, Type: typeof Infinity },
    { Value: true, Type: typeof true },
    { Value: false, Type: typeof false },
    { Value: undefined, Type: typeof undefined },
    { Value: null, Type: typeof null },  // Special case, returns "object" (historical JS quirk)
    { Value: Symbol("sym"), Type: typeof Symbol("sym") },
    { Value: BigInt(123456789012345678901234567890), Type: typeof BigInt(123456789012345678901234567890) },
    { Value: [], Type: typeof [] },
    { Value: {}, Type: typeof {} },
    { Value: function() {}, Type: typeof function() {} },
    { Value: new Date(), Type: typeof new Date() },
    { Value: /^regex$/, Type: typeof /^regex$/ },
    { Value: new Error("Error"), Type: typeof new Error("Error") }
];

// Displaying the table in the console
console.table(values);

/*

    ┌─────────┬──────────────────────────────────────────────────────────┬──────────────┐
    │ (index) │ Value                                                    │ Type         │
    ├─────────┼──────────────────────────────────────────────────────────┼──────────────┤
    │ 0       │ 'Hello'                                                  │ 'string'     │
    │ 1       │ 42                                                       │ 'number'     │
    │ 2       │ 3.14                                                     │ 'number'     │
    │ 3       │ NaN                                                      │ 'number'     │
    │ 4       │ Infinity                                                 │ 'number'     │
    │ 5       │ true                                                     │ 'boolean'    │
    │ 6       │ false                                                    │ 'boolean'    │
    │ 7       │ undefined                                                │ 'undefined'  │
    │ 8       │ null                                                     │ 'object'     │  // JS quirk
    │ 9       │ Symbol(sym)                                              │ 'symbol'     │
    │ 10      │ 123456789012345678901234567890n                          │ 'bigint'     │
    │ 11      │ []                                                       │ 'object'     │
    │ 12      │ {}                                                       │ 'object'     │
    │ 13      │ [Function (anonymous)]                                   │ 'function'   │
    │ 14      │ 2025-02-10T00:00:00.000Z (example date)                  │ 'object'     │
    │ 15      │ /^regex$/                                                │ 'object'     │
    │ 16      │ [Error: Error]                                           │ 'object'     │
    └─────────┴──────────────────────────────────────────────────────────┴──────────────┘
*/


// ============================================ STACK AND HEAP MEMORY ============================================

// Stack => Primitives are stored here (whenever stack is being used, then we are getting copy of those things/varialbes)

// Heap => Non-primitives are stored in here (whenever heap is being used, then we are getting reference to that thing/variable, so whatever changes are being made will directly be made in the original variable itself)

// Stack example
let myRealName = "pooja";
let myOfficialName = myRealName;

console.log(myRealName); // pooja
console.log(myOfficialName); // pooja

myOfficialName = "shivani";

console.log(myRealName); // pooja
console.log(myOfficialName); // shivani (change made in the copy, and not in the original variable)

// Heap example
let objOne = {
    user: "user@google.com",
    upi: "user@okicici",
}

let objTwo = objOne;

console.log(objOne.user); // user@google.com
console.log(objTwo.user); // user@google.com

objTwo.user = "shivani@sap.com";
console.log(objOne.user); // shivani@sap.com (change made in the original variable itself)
console.log(objTwo.user); // shivani@sap.com (change made in the original variable itself)
