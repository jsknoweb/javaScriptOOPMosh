
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicating from Shape');
}

function Circle(radius, color) {
}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
    console.log('duplicating from Circle');
}

function Square() {
}

extend(Square, Shape);

Square.prototype.duplicate = function() {
    console.log('duplicating from Square');
}

const shapes = [
    new Circle(),
    new Square(),
    new Shape()
];

for(let shape of shapes) {
    shape.duplicate();
}

