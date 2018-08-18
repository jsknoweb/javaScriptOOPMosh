    
function Circle(radius) {
    this.radius = radius;
    this.defaultLocation = {x: 0, y: 0};
    this.computeOptimunLocation = function() {
        //...
    }
    this.draw = function() {
        this.computeOptimunLocation();
        console.log('draw');
    }
}

const circle = new Circle(10);
console.log(circle);

circle.defaultLocation = false;
circle.computeOptimunLocation();

console.log(circle);