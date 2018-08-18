
let myArray = [];

// Inspect the object myArray -> its father is the 'arrayBase' object.
// With some methods and properties.
console.log(myArray);

let arrayBase = Object.getPrototypeOf(myArray);
let objectBase = Object.getPrototypeOf(arrayBase);

console.log(arrayBase);
console.log(objectBase);

// myArray --> arrayBase --> objectBase