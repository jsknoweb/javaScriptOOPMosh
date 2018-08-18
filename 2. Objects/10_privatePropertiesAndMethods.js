    
function Circle(radius) {
    this.radius = radius;
    let defaultLocation = {x: 0, y: 0};
    let computeOptimunLocation = function() {
        console.log('computing...');
    }
    this.draw = function() {
        computeOptimunLocation();
        console.log(defaultLocation);
        console.log('draw');
    }
}

const circle = new Circle(10);
console.log(circle);
circle.draw();

// circle. only gives you access to radius and draw.
// Still can be done
circle.defaultLocation = false;
console.log(circle);

// Error...
circle.computeOptimunLocation();
