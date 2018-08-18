
const _items = new WeakMap();
const _checkNotEmpty = new WeakMap();

class Stack {

    constructor() {
        _items.set(this, []);

        _checkNotEmpty.set(this, function() {
            if(_items.get(this).length === 0) 
                throw new Error('Stack is empty.');
        });
    }

    push(item) {
        _items.get(this).push(item);
    }

    pop() {
        //if(_items.get(this).length === 0) throw new Error('Stack is empty.');
        _checkNotEmpty.get(this).call(this);

        return _items.get(this).pop();
    }

    peek() {
        //if(_items.get(this).length === 0) throw new Error('Stack is empty.');
        _checkNotEmpty.get(this).call(this);

        return _items.get(this)[_items.get(this).length - 1];
    }

    get count() {
        return _items.get(this).length;
    }

}

const stack = new Stack();
console.log(stack);

stack.push('10');
stack.push('11');
stack.push('12');

console.log(stack.count);
console.log(stack.pop());
console.log(stack.count)
console.log(stack.peek());
console.log(stack.count);
console.log(stack.pop());
console.log(stack.count);
console.log(stack.pop());
console.log(stack.count);
console.log(stack.pop());
console.log(stack.peek());