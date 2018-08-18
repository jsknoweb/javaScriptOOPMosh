
// One more example
console.log('---------------');
let circle = new Circle(10);
console.log(circle);
console.log(circle.constructor);

console.log('---------------');
let circleBase = circle.__proto__;
let circleBase2 = Object.getPrototypeOf(circle);
console.log(circleBase);
console.log(circleBase2);
console.log(circleBase.constructor);
console.log(circleBase2.constructor);

console.log('---------------');
let circleBase3 = Circle.prototype;
console.log(circleBase3);

console.log(circleBase === circleBase2 && 
    circleBase2 === circleBase3);

function Circle(radius) {
    this.radius = radius;
}