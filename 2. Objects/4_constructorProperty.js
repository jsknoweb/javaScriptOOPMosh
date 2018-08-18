
// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('drawing from Factory Circle');
        }
    }; 
}

const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('drawing from Constructor Cirlce');
    };
}

const circleConstructor = new Circle(1);

circle.draw();
circleConstructor.draw();

console.log('--------------');

console.log(circle.constructor);
console.log(circleConstructor.constructor);

console.log('--------------');

let x = {};
console.log(x.constructor);
new Object();// '', "", ``
new String(); // true, false
new Number(); // 1, 2, 3,...