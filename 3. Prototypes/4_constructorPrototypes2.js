

let obj = {};
// note obj.__proto__ is deprecated in favour of
// method getPrototypeOf
let objectBase = obj.__proto__ // its parent
console.log(obj);
console.log(objectBase);

// Now when we use the object literal syntax, under the
// hood the object is being built by Object construcor.
// Something like new Object() --> Object is the
// constructor function.

// Object has properties like Object.prototype, this 
// property is the prototype the Object function will
// use to build all objects...

// So Object.prototype is our objectBase.
let objectBase2 = Object.prototype;
console.log(objectBase2);

console.log(typeof Object);
console.log(typeof Object.prototype);

console.log(objectBase === objectBase2);