
let myObj = { value : 12 };
let objectBase = Object.getPrototypeOf(myObj);
let objectBase2 = myObj.__proto__;

console.log(objectBase);
console.log(objectBase2);

console.log(objectBase === objectBase2);

console.log('---------------');

// Any function has also a parent or prototype.
// Function constructor are also functions.
function Circle(radius) {
    this.radius = radius;
}

const circle = new Circle(10);
console.log(circle);
console.log(Circle);

console.log(Circle.prototype);
