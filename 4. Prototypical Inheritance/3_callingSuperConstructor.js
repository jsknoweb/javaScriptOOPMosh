

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

// Now change that inheritance structure...
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(10, 'red');

console.log(s);
console.log(c);
console.log(Object.getPrototypeOf(c));
c.duplicate();
c.draw();

console.log('------------------');
// If we do it simple like above we are setting the color 
// property not in the circle object but in the window (browser)
// or global (node) objects depending of the execution context.

function WrongCircle(radius, color) {
    Shape(color);
    this.radius = radius;
}

const wrongCircle = new WrongCircle(12, 'colorInWrongPlace');

for(let key in wrongCircle) 
    console.log(key);

console.log(window.color);