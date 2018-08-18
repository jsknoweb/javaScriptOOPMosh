console.log('---------------');

function Circle(radius) {
    // Instance member (property)
    this.radius = radius;

    // Instance member (method)
    this.move = function() {
        console.log('move');
    };
}

const c1 = new Circle(1);

// Prototype members (method)
Circle.prototype.draw = function() {
    console.log('draw');
}

// Method available even when its declaration was after the object
// construction because objects are reference types
c1.draw();

console.log('---------------');
// Object.keys only returns instance members
console.log(Object.keys(c1));

console.log('---------------');
// FOR_IN returns all members (instance + prototype)
for(let key in c1) console.log(key);

console.log('---------------');
console.log(c1.hasOwnProperty('radius'));
console.log(c1.hasOwnProperty('draw'));