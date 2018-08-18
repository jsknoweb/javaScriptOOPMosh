    
console.log('----OLD WAY TO  ACCESS PRIVATE  PROPERTY---');
function Circle(radius) {
    this.radius = radius;
    let defaultLocation = {x: 0, y: 0};
    this.getDefaultLocation = function() {
        return defaultLocation;
    }
    this.draw = function() {
        console.log(defaultLocation);
        console.log('draw');
    };
}

const circle = new Circle(10);
console.log(circle);

console.log(circle.getDefaultLocation());

console.log('----NEW WAY TO  ACCESS PRIVATE  PROPERTY---');
function NewCircle(radius) {
    this.radius = radius;
    let defaultLocation = {x: 0, y: 0};
    this.draw = function() {
        console.log(defaultLocation);
        console.log('draw');
    };
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if(!value.x || !value.y)
                throw new Error('Invalid Location');
            
            defaultLocation = value;
        }
    });
}

const newCircle = new NewCircle(10);
console.log(newCircle);

console.log(newCircle.defaultLocation);
newCircle.defaultLocation = {x:2, y:2};
console.log(newCircle);

newCircle.defaultLocation = 3;
