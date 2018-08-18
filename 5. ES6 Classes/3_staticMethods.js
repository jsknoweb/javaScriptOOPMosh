
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Instance Method
    draw() {
        console.log('draw');
    }

    // Static Method
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const circle = new Circle(10);
console.log(circle);
circle.draw();


const parsedCircle = Circle.parse('{ "radius": 3 }');
console.log(parsedCircle);
parsedCircle.draw();

// So we use static methods to create utility functions that are not 
// tied to a particular object.

console.log(Math.floor(4.7));

class MyMath {
    static abs(value) {
        return value < 0 ? -value : value;
    }
}

console.log(MyMath.abs(-4.6));