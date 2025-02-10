console.log(2 > 1); // greater than
console.log(2 >= 1); // greater than or equal to
console.log(2 == 1); // both values are equal or not
console.log(2 != 1); // both values are unequal
console.log(2 === 1); // strict equality check
console.log(2 !== 1); // strict unequality check

// In above type of comparisons, we don't encounter any issues. we get issues when we are comparing values of different datatypes

// Examples belwo
console.log("2" > 1);

console.log("02" > 1);

// for both of the examples, answer is true, so javascript engine automatically converted this "2" and "02" to number 2, and hence comparison was possible

// so in this type of cases we do not get predictable results. so if you're comparing any two values make sure that there datatypes are same. so that we are not facing any such issues

// Advanced examples
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// now as we saw, that in above two comparisons (null > 0 and null == 0) we got "false" as result but for null >= 0 we got result "true". Reason behind this is, the equality check "==" and the comparison operators ">, <, >=, <=" work differently. Comparison operators perform type coercion and hence convert null to a number and then compare, so null >= 0 and null <= 0 will give us the result as "true"

// Advanced examples
console.log(undefined > 1); // false (even if we compare it with 0)
console.log(undefined == 1); // false (even if we compare it with 0)
console.log(undefined >= 1); // false (even if we compare it with 0)

// STRICT CHECKING
console.log("2" == 2); // true (the type conversion does not take place here)
console.log("2" === 2); // false (here both the datatypes are also compared)