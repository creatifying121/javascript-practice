// 🚀 JavaScript Output-Based Questions

console.log("=== Type Conversion (Explicit) ===");

console.log(Number("123"));       // 123
console.log(Number("123abc"));    // NaN
console.log(parseInt("123abc"));  // 123
console.log(parseFloat("3.14abc"));// 3.14

console.log(Boolean(""));         // false
console.log(Boolean(0));          // false
console.log(Boolean("false"));    // true
console.log(Boolean([]));         // true
console.log(Boolean({}));         // true
console.log(Boolean(null));       // false

console.log("=== Type Coercion (Implicit) ===");

console.log("5" + 2);             // "52"
console.log("5" - 2);             // 3
console.log("5" * "2");           // 10
console.log("5" / "2");           // 2.5

console.log(1 + true);            // 2
console.log("5" + false);         // "5false"
console.log(5 * null);            // 0
console.log("5" - true);          // 4
console.log("5" * undefined);     // NaN

console.log("=== Arithmetic Operations ===");

console.log(5 + "5");             // "55"
console.log(5 - "5");             // 0
console.log(5 * "5");             // 25
console.log(5 / "5");             // 1
console.log(5 % "2");             // 1

console.log(0.1 + 0.2 == 0.3);    // false (due to floating-point precision issues)
console.log(10 / 0);              // Infinity
console.log("10" / "2");          // 5
console.log(Infinity - Infinity); // NaN
console.log(1 / "hello");         // NaN

console.log("=== Prefix and Postfix Operators ===");

let aa = 5;
console.log(aa++);   // 5 (post-increment: returns old value, then increases)
console.log(aa);     // 6
console.log(++aa);   // 7 (pre-increment: increases first, then returns)
console.log(aa--);   // 7 (post-decrement: returns old value, then decreases)
console.log(aa);     // 6
console.log(--aa);   // 5 (pre-decrement: decreases first, then returns)

let xx = 3, y = 4;
let z = xx++ + ++y;  
console.log(xx, y, z);  // 4 5 8

let p = 1;
console.log(p++ + ++p + p-- + --p);  // 8
// Breakdown:
// p++  → returns 1, now p = 2
// ++p  → increments to 3, returns 3
// p--  → returns 3, now p = 2
// --p  → decrements to 1, returns 1
// Sum: 1 + 3 + 3 + 1 = 8


// 🚀 Tricky JavaScript Output-Based Questions 

console.log("=== Type Coercion & Type Conversion ===");

console.log([] == ![]);  // true ( [] == false → "" == false → true )
console.log(null == undefined);  // true (Loose equality treats them as equal)
console.log(null === undefined); // false (Strict equality checks type)
console.log("5" == 5);  // true (String "5" is converted to number)
console.log("5" === 5); // false (Strict comparison, different types)

console.log("=== Complex Arithmetic Coercion ===");

console.log([] + []);  // "" (Empty array converts to empty string)
console.log([] + {});  // "[object Object]" ([] → "" and {} → string)
console.log({} + []);  // "[object Object]" (Same as above)
console.log(true + false);  // 1 (true → 1, false → 0, so 1 + 0 = 1)
console.log(true + "5");  // "true5" (String concatenation)
console.log("5" - - "2");  // 7 ("5" → 5, "-2" → -2, so 5 + 2)
console.log("5px" - 2);  // NaN ("5px" is not a number)
console.log(null + 1);  // 1 (null converts to 0)
console.log(undefined + 1);  // NaN (undefined cannot be converted)

console.log("=== Prefix and Postfix Increments ===");

let a = 2, b = 3;
let c = a++ + ++b + ++a;
console.log(a, b, c);  // 4, 4, 10

let x = 5;
console.log(x++ + x++);  // 11 (5 + 6, then x = 7)
console.log(++x + x++ + ++x);  // 22 (x=8, 8 + 8 + 10)

console.log("=== Unary Operators & NaN ===");

console.log(+"10" + -"10" + +"10px");  // NaN (10 - 10 + NaN)
console.log(!"false" + !"true");  // 0 (false + false = 0)
console.log(!!"false" == !!"true");  // true (both non-empty strings → true)

console.log("=== Logical Operators & Short-Circuiting ===");

console.log(0 || 1 && 2 || 3);  // 2 (1 && 2 → 2, then 0 || 2 || 3)
console.log(false && true || true);  // true (false && true → false, false || true → true)
console.log(null || undefined || "Hello" || false);  // "Hello" (First truthy value)
console.log(1 && "Hello" && 0 && "World");  // 0 (First falsy value)

console.log("=== Edge Cases with Objects and Primitives ===");

console.log({} + []);  // "[object Object]" ({} treated as block, then `+ []` converts to string)
console.log([] + {});  // "[object Object]" (same as above)
console.log([] == false);  // true (Empty array converts to empty string → false)
console.log({} == {});  // false (Different object references)
console.log([] == ![]);  // true ([] → "" == false → "" == "")

console.log("=== Implicit Type Conversions ===");

console.log("2" > "12");  // true (Lexicographic comparison → "2" > "1")
console.log("2" > 12);  // false ("2" converts to number, 2 > 12 → false)
console.log("02" > 1);  // true ("02" converts to 2, 2 > 1)
console.log(null == 0);  // false (null is only equal to undefined)
console.log(null >= 0);  // true (null is converted to 0, 0 >= 0)
