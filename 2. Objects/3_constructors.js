
// The object literal approach is not a good way if the 
// object to build has behavoiur (methods).
// We would have to copy and paste the methods all over the program
// whenever we want to create and  object.

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('drawing from Factory Circle');
        }
    }; 
}

const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function() {
        console.log('drawing from Constructor Cirlce');
    };
}

// When we call the new operator to call a function
// (Circle in this case) 3 things happen:
// 1.  An empty object is created.
// 2. 'this' will be set to point to that object.
// 3. finally it will return that object from the function.
const circleConstructor = new Circle(1);

// Here this will point to the global(node) window(browser)
// and there is no returned object.
// Try: node index.js (in the bash console)
const testingFunctionWithNoNew = Circle(1);

circle.draw();
circleConstructor.draw();
testingFunctionWithNoNew.draw();