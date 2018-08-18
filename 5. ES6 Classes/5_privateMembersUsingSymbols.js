
/// IMPLEMENTING PRIVATE PROPERTIES ///

console.log(Symbol() === Symbol());
const _radius = Symbol();

class Circle {
    constructor(radius, color) {
        //this.radius = radius;
        //this['radius'] = radius;
        this[_radius] = radius;
        this['color'] = color;
    }
}

const c = new Circle(20, 'red');

console.log(Object.getOwnPropertyNames(c));
console.log(c);

c.color = 'blue';
c.radius = 10;
c._radius = 15;

console.log(Object.getOwnPropertyNames(c));
console.log(c);

const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);