

function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius) {
    this.radius = radius;
}

// Now change that inheritance structure...
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// Define the function after the change of hierarchy
Circle.prototype.draw = function() {
    console.log('draw');
}
const c = new Circle.prototype.constructor(10);
console.log(c);

console.log(Object.getPrototypeOf(c));
c.duplicate();
c.draw();