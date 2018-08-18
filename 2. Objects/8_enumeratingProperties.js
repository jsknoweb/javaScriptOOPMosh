
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

for(property in circle) {
    console.log(property, circle[property]);
}

for(property in circle) {
    if(typeof circle[property] !== 'function')
        console.log(property, circle[property]);
}

const properties = Object.keys(circle);
console.log(properties);

if('radius' in circle)
    console.log('Circle has a radius');
