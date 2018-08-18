
console.log('--------PRIMITIVES--------');
let x = 10;
let y = x;

x = 20;

console.log(x);
console.log(y);

console.log('-------REFERENCE TYPES--------');
let xObject = { value: 10};
let yObject = xObject;

xObject.value = 20;

console.log(xObject);
console.log(yObject);

console.log('--------FUNCTION WITH PRIMITIVES ARGS--------');
let number = 10;
function increase(number) {
    number++;
}
increase(number);
console.log(number);

console.log('-------FUNCTION WITH REFERENCE TYPES ARGS--------');
let numberObj = { value: 10};
function increaseObj(numberObj) {
    numberObj.value++;
}
increaseObj(numberObj);
console.log(numberObj);
