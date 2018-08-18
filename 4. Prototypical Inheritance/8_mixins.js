
function mixin(target, ...sources) { // The rest operator (...)
    Object.assign(target, ...sources); // The spread operator (...)
}

const canEat = {
    eat: function() {
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function() {
        console.log('walking');
    }
};

const canSwim = {
    swim: function() {
        console.log('swim');
    }
};

// Assign 'behavoiur' through mixin into a particular object
const person = Object.assign({}, canEat, canWalk);
console.log(person);
person.eat();
person.walk();

function Dog() {
}

// Assign 'behavoiur' through mixin into a prototype (so all dogs created)
Object.assign(Dog.prototype, canEat, canWalk);

const dog = new Dog();
console.log(dog);

function Goldfish() {
}

// Refactoring the mixin
mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();
console.log(goldfish);
goldfish.swim();



