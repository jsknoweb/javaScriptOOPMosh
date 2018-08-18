
// Three options to access the property radius
// with getRadius method
// with c.radius (old way)
// with c.radius (ES6 way)

const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);

        // old way
        // Object.defineProperty(this, 'radius', {
        //     get: function() {
        //         return _radius.get(this);
        //     }
        // });

    }

    // option with method
    getRadius() {
        return _radius.get(this)
    }

    // ES6 way
    get radius() {
        return _radius.get(this);
    }

    set radius(value) {
        if(value <= 0) throw new Error('Invalid radius');

        _radius.set(this, value);
    }
    
}

const c = new Circle(20);
console.log(c);
console.log(c.getRadius());
console.log(c.radius);

c.radius = 30;
console.log(c.radius);
c.radius = -3;