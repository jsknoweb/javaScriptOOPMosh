
// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('drawing from Constructor Cirlce');
    };
}

const circleConstructor = new Circle(1);
circleConstructor.draw();

console.log('-------------');

console.log(Circle.name);
console.log(Circle.length);
console.log(Circle.constructor);

console.log('-------------');

console.log(circleConstructor.constructor);


