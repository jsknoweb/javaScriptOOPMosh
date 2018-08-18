
class Circle {
    draw() {
        console.log(this);
    }
}

const c = new Circle();
const draw = c.draw;
draw();


// By default the  body of our classes are executed in strict mode.