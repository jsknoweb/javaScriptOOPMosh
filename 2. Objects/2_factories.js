
// The object literal approach is not a good way if the 
// object to build has behavoiur (methods).
// We would have to copy and paste the methods all over the program
// whenever we want to create and  object.

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    }; 
}

const circle = createCircle(1);
circle.draw();