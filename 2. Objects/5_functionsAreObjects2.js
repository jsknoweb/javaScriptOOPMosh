
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('drawing from Constructor Cirlce');
    };
}

const circleConstructor = new Circle(1);
const anotherCircleConstructor = Circle.call({}, 2);
const nowHereIs = {};
Circle.call(nowHereIs, 3);
Circle.apply({}, [1]);

console.log(circleConstructor);
console.log(anotherCircleConstructor);
console.log(nowHereIs);



