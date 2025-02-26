// Dates 

let myDate = new Date(); 
console.log(myDate); // Wed Feb 26 2025 14:57:07 GMT+0530 (India Standard Time)

console.log(myDate.toString()); // Wed Feb 26 2025 14:57:42 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); // Wed Feb 26 2025

console.log(myDate.toISOString()); // 2025-02-26T09:28:25.814Z

console.log(myDate.toJSON()); // 2025-02-26T10:41:22.993Z

console.log(myDate.toLocaleDateString()); // 26/02/2025

console.log(myDate.toLocaleString()); // 26/02/2025, 16:12:35


// providing custom date
let myCreatedDate = new Date(2025,0,1);

console.log(myCreatedDate.toLocaleDateString()); // 01/01/2025 => month indexing starts from 0 (january)

let myCreatedDateTime = new Date(2025, 2, 21, 9, 55); 
console.log(myCreatedDateTime.toLocaleString()); // 21/03/2025, 09:55:00

// timestamps (can be used for quiz application or polling component, etc)
let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1740567013673 => this is the time in milliseconds from the standard date (1 Jan 1970)

// Now the above timestamps are not easily readable and understandable, so we need some similar value to compare. So let's say we have a client who booked a hotel room for 01 jan 2025, let's say he checked in at 10:03 am, and now i want to calculate how many hours he occupied the room.

let checkInTime = new Date(2025, 0, 1, 10, 3);
let checkOutTime = Date.now();

console.log(checkInTime.getTime()); // 1735705980000
console.log(checkOutTime); // 1740567376448

// now these values can be calculated in such a way that we can extract the information we want

// =========================

let theDate = new Date();

theDate.toLocaleString('default', {
    weekday: 'long'
}) // in this way we can play with the things localestring provides to us

