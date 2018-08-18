function Circle(radius) {
    this.radius = radius;

    this.draw = function() {
        console.log('draw');
    };
}

const circle = new Circle(10);
// Let's inspect it in  the console
console.log(circle);

// Objects created by a given constructor will have the same prototype.
let circleBase = Object.getPrototypeOf(circle);
let objectBase = Object.getPrototypeOf(circleBase);

console.log(circleBase);
console.log(objectBase);

// circle --> circleBase --> objectBase