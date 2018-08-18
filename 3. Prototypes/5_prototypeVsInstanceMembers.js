
function Circle(radius) {
    this.radius = radius;

    this.draw = function() {
        console.log('draw');
    };
}

const c1 = new Circle(1);
const c2 = new Circle(1);

console.log(c1);
console.log(c2);

// This way if we have 1.000 objects of Circle type we
// will have 1.000 copies of its draw method created.
// Which is a waste of time.

// Solution
// Move the draw method to  the  circleBase, that is, to
// the prototype of the Circle function, that is,
// to the parent of circle object.
console.log('---------------');

function OptimiseCircle(radius) {
    // Instance members
    this.radius = radius;
}

// Prototype members
OptimiseCircle.prototype.draw = function() {
    console.log('draw');
}

const optC1 = new OptimiseCircle(1);
const optC2 = new OptimiseCircle(1);

console.log(optC1);
console.log(optC2);

optC1.draw();

// So essentially we have two kind of properties and 
// methods in JS, we have instance members and 
// prototype members.


console.log('--Overriding Prototype members form objectBase: toString--');
// Prototype method from Object
console.log(optC1.toString());

// That we can override. (Another Prototype method)
OptimiseCircle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius;
}

console.log(optC1.toString());

console.log('--Prototype members using Instance members--');
// Also we can use instance methods in prototypes
// methods ...

// Or instance properties in prototypes
// methods ...

function OptimiseCircle2(radius) {
    // Instance members
    this.radius = radius;

    this.move = function() {
        console.log('move');
    };
}

OptimiseCircle2.prototype.draw = function() {
    this.move();
    console.log('drawing circle of radius:' + this.radius);
}

let optCType2 = new OptimiseCircle2(20);
optCType2.draw();

console.log('--Instance members using Prototype members--');
// In the same way we can reference an prototype member
// in an instance  member.

function Square(side) {
    // Instance members
    this.side = side;

    this.move = function() {
        this.draw();
        console.log('move');
    };
}

Square.prototype.draw = function() {
    console.log('drawing square of side:' + this.side);
}

let square = new Square(20);
square.move();