
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

// Adding property on  the go with JS is possible

// Notation 1
circle.location = {
    x: 1, y: 2
};
console.log(circle);

// Notation 2
circle['color'] = 'red';
console.log(circle);

// Notation 2 is usefull to 
// 1. get/set properites by variables.
const propertyName = 'color';
console.log(circle[propertyName]);

// 2. get/set properties with special name
const propertyName2 = 'center-location';
/*
circle.center-location = {
    x: 1, y: 2
};
*/
circle[propertyName2] = {
    x: 1, y: 2
};
console.log(circle[propertyName2]);
console.log(circle);

// 3. to delete properties with variables
delete circle[propertyName2];
console.log(circle);