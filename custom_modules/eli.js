let Person = require('./lib/Person');

let eli = new Person('Eli');

eli.on('hungry_for', function (food) {
    console.log(`${this.name} is hungry for ${food}`);
});

eli.emit('hungry_for', 'apple');