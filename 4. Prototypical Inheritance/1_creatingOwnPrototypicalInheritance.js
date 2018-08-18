
function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1);

console.log(s);
console.log(c);

// So we have
// c --> circleBase (Circle.prototype) --> objectBase (Object.prototype)
// s --> shapeBase (Shape.prototype) --> objectBase (Object.prototype)
console.log(Object.getPrototypeOf(c));

// What we can get
// c --> circleBase --> shapeBase --> objectBase