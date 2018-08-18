

const _radius = new WeakMap();
const _move = new WeakMap();
const _move2 = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);

        _move.set(this, function() {
            console.log('move', this);
        });

        _move2.set(this, () => {
            console.log('move2', this);
        });
    }

    draw() {
        console.log('The radius is: ', _radius.get(this));
        _move.get(this)();
        _move2.get(this)();
    }
}

const c = new Circle(20);
console.log(c);
c.draw();