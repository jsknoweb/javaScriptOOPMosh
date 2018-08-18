
let person = { name: 'Jose'};
console.log(person);

for (let key in person) 
    console.log(key);

console.log(Object.keys(person));

// objectBase properties are hidden...
console.log('--------------');

let objectBase = Object.getPrototypeOf(person);
for(let key in  objectBase)
    console.log(key);

console.log(Object.keys(objectBase));

console.log('--------------');
// ...because the only one it has, 'toString' has the 
// attribute enumerable set to false.

let propertyDescriptor = 
    Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(propertyDescriptor);

console.log('----------------');

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
});

// is not writable, so this change will not have effect
person.name = 'John';
// is not configurable, so delete will not have effect.
delete person.name;
console.log(person);
// is not enumerable, so it will not appear
console.log(Object.keys(person));
