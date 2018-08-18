
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
    Shape.prototype.duplicate.call(this);
    console.log('duplicating from Circle');
}

const c = new Circle();
c.duplicate();

