let events = require('events');

let emitter = new events.EventEmitter();

emitter.on('happyEvent', (one, two) => {
    console.log(`If I'm ${one} I tend to ${two}`);
});

emitter.emit('happyEvent', 'happy', 'sing');
