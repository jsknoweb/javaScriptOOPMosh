
function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicating from Shape');
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function() {
    console.log('drawing from Circle');
}

function Square(size) {
    this.size = size;
}

extend(Square, Shape);

const s = new Shape();
const c = new Circle(10, 'red');
const sq = new Square(30);

console.log('--Objects--');
console.log(s);
console.log(c);
console.log(sq);

console.log('--Parents--');
console.log(Object.getPrototypeOf(s));
console.log(Object.getPrototypeOf(c));
console.log(Object.getPrototypeOf(sq));

console.log('--Methods--');
s.duplicate();
c.duplicate();
c.draw();
sq.duplicate();

