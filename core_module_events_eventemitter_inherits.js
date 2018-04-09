let EventEmitter = require('events').EventEmitter;
let util = require('util');

let Person = function (name) {
    this.name = name;
};

util.inherits(Person, EventEmitter); // Add EventEmitter to the Person prototype

let gwyn = new Person('Gwyn');

// Note: when an ordinary function is passed as the callback to an eventlistener the 'this' keyword will reference
//       the EventEmitter to which the listener is attached.
//  BUT: This does not work when you use an ES6 arrow function 

gwyn.on('greeted', function (greeter) {
    console.log(`${this.name} says 'Well, hello to you too ${greeter}'`);
});

gwyn.emit('greeted', 'Barry');