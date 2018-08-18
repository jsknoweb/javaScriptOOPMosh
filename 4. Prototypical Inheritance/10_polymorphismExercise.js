
function extend(Child, parent) {
    Child.prototype = parent;
    Child.prototype.constructor = Child;
}

function HtmlElement() {
    this.click = function() {
        console.log('clicking from HtmlElement object');
    }
}

HtmlElement.prototype.focus = function() {
    console.log('focus from HtmlElement prototype');
}

function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function(item) {
        this.items.push(item);
    }

    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render = function() {
        return `
    <select>${this.items.map(item => `
       <option>${item}</option>`).join('')}
    </select>`;
    }


}

extend(HtmlSelectElement, new HtmlElement());

function HtmlImageElement(src) {
    this.src = src;

    this.render = function() {
        return `<img src="${this.src}" />`;
        // return '<img src "' + this.src + '" />';
    }
}

extend(HtmlImageElement, new HtmlElement());

///////////////////////////////////////////////

console.log('-----CREATING OBJECTS-----');
const e = new HtmlElement();
console.log(e);
e.click();
e.focus();
 
const s = new HtmlSelectElement(['1', '2', '3']);
console.log(s.render());

const i = new HtmlImageElement();
i.src = 'html://...';
console.log(i.render());

console.log('--EXERCISE--');
const elements = [
    new HtmlSelectElement([1, 2, 3, 4]),
    new HtmlImageElement('http://')
];

for(let element of elements) 
    console.log(element.render());



/*
    this.render = function() {
        const init = `<select>
        `;
        const end = `</select>`;
        return init + getDropList(this.items) + end;
    }

    let getDropList = function(items) {
        let list = '';
        for(let item of items) {
            list += '<option>' + item + '</option>';
        }
        return list;
    }

*/

