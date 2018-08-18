
// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function() {
//         console.log('draw');
//     }
// }

class Circle {
    constructor(radius) {
        this.radius = radius;

        this.movie = function() {}
    }

    draw() {
        console.log('draw');
    }
}

const c = new Circle(10);
console.log(c);
console.log(typeof Circle);

// Try out http://babeljs.io/