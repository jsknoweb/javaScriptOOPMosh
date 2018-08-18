
let x = {};

// Inspect the object x -> its father is the 'objectBase' object.
// With some methods and properties.
console.log(x);
console.log(x.toString());

let y = {};

// Inspect the object y -> its father is the 'objectBase' object.
console.log(y);

let xPrototype = Object.getPrototypeOf(x);
let yPrototype = Object.getPrototypeOf(y);
console.log(xPrototype === yPrototype);

// x --> objectBase
// objectLiteral ({}) --> objectBase