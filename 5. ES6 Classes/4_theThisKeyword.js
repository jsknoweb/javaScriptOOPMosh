
// 'use strict';

const Circle = function() {
    this.draw = function() {
        console.log(this);
    }
};

const c = new Circle();
// Method Call --> because we are calling a method on an object.
c.draw();

// Here I'm not calling this method, just getting a reference to it.
const draw = c.draw;
console.log(draw);

// Function Call --> because we are calling draw like a standalone
//              function which is not part of an object.
draw();

// Then by default 'this' in line 4 will point to the window object
// (or the global object executing the script through node)

// In fact when we create a circle with a new operator, three things
// happen : creation of empty object, set this to point to that object and
// return this object.

// If we forget the new operator when using Circle function, in the same way
// that 'this' will reference to the window (global) object

// When we enable the strict mode if we call a Method as a Function
// as in line 20, 'this' by default will no longer point to window 
// object, it will be set to undefined.

// And the reason for this is to prevent us from accidentally 
// modifying the global object (BAD PRACTICE).