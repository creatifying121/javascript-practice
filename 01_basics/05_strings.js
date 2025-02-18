// common way of concatenating strings (or other values)
const myName = "Shivani ";
const repoCount = 10;

// console.log(myName + "has " + repoCount + " repositories");

// Now-a-days we are using template literals , where String Interpolation takes place, this is nothing but here we need not to concatenate stuff, we can directly write everything in a single line and inject variables/expressions wherever necessary

console.log(`Hello my name is ${myName} and I have ${repoCount} repositories`);

// Another way of declaring a String
const game = new String("hakuna matata");

console.log(game); // this will be the output when string is defined in this manner => 0: "h"1: "a"2: "k"3: "u"4: "n"5: "a"6: " "7: "m"8: "a"9: "t"10: "a"11: "t"12: "a"length: 13

// along with the output above, we get a lot of methods attached with it, mastering those is equivalent to mastering string concept as a whole

// Some of the things we can do with strings are below: 
console.log(game[0]); // h => we get the element on the 0th position in that particular string

// accessing the Prototype
console.log(game.__proto__);

// other methods we have
console.log(game.length); // returns length of string => 13

console.log(game.toUpperCase()); // transforms each letter to upper case (no changes in original value) => HAKUNA MATATA

console.log(game.charAt(7)); // returns element at 7th position => m

console.log(game.indexOf(' ')); // returns the position where this element is located => 6

// read about these and other methods too
// 1. substring
// 2. slice
// 3. trim
// 4. replace
// 5. includes
// 6. split

// ==================================================================

// All string methods and properties

// String => Property => length (returns number of characters present in a string)
const str = "Shivani works at SAP"; // this string has 20 characters (spaces included)
console.log(str.length); // 20

// Now sometimes we want to access specific character, let's say i want to access t from above string, so we cam do it as below
console.log(str[0]); // indexing starts from zero => S
console.log(str[15]); // t

// now let's say i want to access the last character in very large string
console.log(str[str.length - 1]); // P

// ==================================================================

// String => methods
// 1. charAt() method => It returns the element present at a particular index. 
console.log(str.charAt(10)); // r
console.log(str.charAt(999)); // an empty string will be returned
console.log(typeof(str.charAt(999))); // string

// ==================================================================

// 2. indexOf() method => this method returns the starting index of any string we provide as argument to it. it is case sensitive
const str1 = "The code undefined code code !";

console.log(str1.indexOf("Code"));      // -1 {because "Code" is not present in the string : case sensitive}

console.log(str1.indexOf("code"));      // 4 {searches for first occurence of the word and returns the index from where it starts}

console.log(str1.indexOf("code", 4));   // 4 {the second argument is the position from where we want to start the search, so here, when we gave position as 4, and on 4th index itself "code" was starting, thus returned value is 4}

console.log(str1.indexOf("code", 5));   // 19 {now here, since indexOf looks forward and searches, so the first "code" after index 5 comes at position 19, hence 19 is the output}

console.log(str1.indexOf("code", -5));  // 4 {whenever we provide a negative index to indexOf() method, it considers it as zero, and hence 4 is returned, coz "code" starts from 4th index}

console.log(str1.indexOf(""));          // 0 {whenever we pass an empty string in indexOf() it returns 0, as JavaScript implicitly introduces empty string before every character and also after the last character, hence 0 is returned}

console.log(str1.indexOf());            // 9 {and when nothing is passed as an argument to this method, then it goes on finding "undefined" in the string, if it is present, then its starting index is returned, otherwise, -1 is returned}



// 3. lastIndexOf() method => this method starts searching for strings from backwards, and then returns the index from where the string started. it is also case sensitive
console.log(str1.lastIndexOf("Code"));      // -1 {it is also case sensitive, hence couldn't find "Code" and returned -1}

console.log(str1.lastIndexOf("code"));      // 24 {started searching from last element, and hence found first occurence of "code" from backwards at 24th position and hence 24 is returned}

console.log(str1.lastIndexOf("code", 24));  // 24 {again here, from the last character, the word "code" is at 24th position and if the position provided is itself 24 , hence the same is returned}

console.log(str1.lastIndexOf("code", 23));  // 19 {now this time since next "code" starts from 24th position, this will move forward (from backward only) and return the starting index of second occurence of "code"}

console.log(str1.lastIndexOf("code", -5));  // -1 {since the lastIndexOf also considers negative values to be 0 itself, hence -1 is returned, as when it tries to traverse further , it does not find anything at negative index}

console.log(str1.lastIndexOf(""));          // 30 {as discussed earlier, when an empty string is passed, then even though we don't have explicitly passed an empty string, JavaScript implicitly adds an empty string before every character and after the last character too, hence 30 is the answer}

console.log(str1.lastIndexOf());            // 9 {and when nothing is passed, then it starts searching for "undefined" and in our case, undefined starts at index 9}

// ==================================================================

// below two methods extract a section of a string and return as a new string, both of those have two parameters "indexStart" and "indexEnd"

const str2 = "The morning is upon us." 
// now the above string has length 23 and , from the start to end indices will be 0 to 22 while from end to start the indices (-ve) will be from -1 to -23)

// 4. slice() method
console.log(str2.slice(12)); // 'is upon us.' {here the slice method has start index as 12, so it will go on index 12 (inclusive) and print whole everything at and after index 12, hence 'is upon us.' is the output}

console.log(str2.slice(-11)); // 'is upon us.' {this time it started from the last index in traversed backwards (from -1) and after reaching index -11, it printed whole string from that point}

console.log(str2.slice(23)); // '' {since the index does not exist, an empty string will be returned}

// 5. substring() method => this method is similar to the splice method, but it does not takes negative number, it treats negative numbers as a zero
console.log(str2.substring(12)); // 'is upon us.'

console.log(str2.substring(-11)); // 'The morning is upon us.' {since negatives are treated as 0, so starting from the 0 index, whole string will be printed}

console.log(str2.substring(23)); // '' {since the index does not exist, an empty string will be returned}

// ==================================================================
