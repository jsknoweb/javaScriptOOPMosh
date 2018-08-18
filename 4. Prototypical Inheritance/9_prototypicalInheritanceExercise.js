
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

function HtmlSelectElement(items = []) { //(items)
    //this.items = items || [];
    this.items = items;

    this.addItem = function(item) {
        this.items.push(item);
    }

    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}

extend(HtmlSelectElement, new HtmlElement());

// With this solution HtmlElement does not inheritate click method,
// only the focus method

// baseHtmlSelectElement                       baseHtmlElement
// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype); 

// SOLUTION:

// baseHtmlSelectElement         htmlElement instance
// HtmlSelectElement.prototype = new HtmlElement(); 


const e = new HtmlElement();
console.log(e);
e.click();
e.focus();



