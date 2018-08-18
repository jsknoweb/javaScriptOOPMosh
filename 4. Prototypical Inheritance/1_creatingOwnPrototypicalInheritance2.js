

function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius) {
    this.radius = radius;
}

// So we have
// c --> circleBase (Circle.prototype) --> objectBase (Object.prototype)
// s --> shapeBase (Shape.prototype) --> objectBase (Object.prototype)

// This is the implicit relationship so far...
// Circle.prototype = Object.create(Object.prototype);

// Now change that inheritance structure...
Circle.prototype = Object.create(Shape.prototype);

// Define the function AFTER the change of hierarchy
Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1);

console.log(s);
console.log(c);


// What we can get
// c --> circleBase --> shapeBase --> objectBase


console.log(Object.getPrototypeOf(c));
c.duplicate();
c.draw();