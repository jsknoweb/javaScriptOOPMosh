
// Another example
console.log('---------------');
let myArray = [];
console.log(myArray);
console.log(myArray.constructor);

console.log('---------------');
let baseArray = myArray.__proto__;
let baseArray2 = Object.getPrototypeOf(myArray);
console.log(baseArray);
console.log(baseArray2);
console.log(baseArray.constructor);
console.log(baseArray2.constructor);

console.log('---------------');
let baseArray3 = Array.prototype;
console.log(baseArray3);

console.log(baseArray === baseArray2 && 
    baseArray2 === baseArray3);
