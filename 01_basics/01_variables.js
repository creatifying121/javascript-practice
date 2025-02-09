// console.log("Hello ji");

const accountId = 12233445566;
let accountEmail = "shivani@sap.com";
var accountPassword = '12344556';
accountCity = "Bangalore";

// accountId = 12144; // we cannot change the value of a constant

accountEmail = "shivani@microsoft.com";
accountPassword = '1234abcd';
accountCity = "Pune";

console.log(accountId); // TypeError: Assignment to a constant variable
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity]);

// var is not recommended to use, as it does not know what is a scope and hence there were a lot of ambiguities becuase of this. for example, in earlier times, when different developers used to work on different parts of code and by mistake if they chose same name for two different variables, then values were overwritten, and that caused a huge confusion plus affected on the product too.

// whenever we don't put any value inside the variable, it is undefined (talking about let and var here), for const, we cannot keep the variable undefined.
// example:
// let myState;
// const myState; => error