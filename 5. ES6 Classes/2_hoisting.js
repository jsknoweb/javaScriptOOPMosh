
sayHello();
//sayGoodbye();
//console.log(number);

// Function Declaration (with no semi-colon at the end)
function sayHello() { console.log('Hi there!')}

// Function Expression (semi-colon at the end)
const sayGoodbye = function() { console.log('Goodbye my friend!')};
const number = 1;

// Function declaration  are hoisted which means they are raised to the
// top of the code. So I can declare the function sayHello and call it
// before its proper declaration.

// In contract Function Expressions are not hoisted

// When we declare classes we can use a Declaration or an Expression syntax

//const c = new Circle();
//const sq = new Square();

// Class Declaration (use always this one)
class Circle {

}

// Class Expression
const Square = class {

};

// Unlike Functions, Class Declarations or Class Expressions are not
// hoisted 

const c = new Circle();
const sq = new Square();