let readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

let smart_person = {
    name: '',
    sayings: []
};


rl.question("Give me the name of a smart person? ", answer => {

    smart_person.name = answer;
    rl.setPrompt(`What would ${smart_person.name} say? `);
    rl.prompt();
});


rl.on('line', function (saying) {

    smart_person.sayings.push(saying.trim());

    if (saying.toLowerCase().trim() === 'exit') {
        rl.close();
    } else {
        rl.setPrompt(`What else would ${smart_person.name} say? ('exit' to leave) `);
        rl.prompt();
    }
});


rl.on('close', function () {

    console.log("%s is a real person that says %j", smart_person.name, smart_person.sayings);
    process.exit();
});



