
/// IMPLEMENTING PRIVATE METHODS ///

const _radius = Symbol();
const _draw = Symbol();

class Circle {
    constructor(radius) {
        this[_radius] = radius;
    }

    [_draw]() {
        console.log('private drawing...');
    }
}

const c = new Circle(20);
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);
console.log(c);