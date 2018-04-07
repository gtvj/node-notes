// Note the use of:
// - process.stdout and process.stdin
// - process.exit()

const questions = [
    "What is your name?",
    "What is your fav hobby?",
    "What is your preferred programming language?"
];

const answers = [];

function ask(i) {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write("  >  ");
}

process.stdin.on('data', data => {

    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }

});

process.on('exit', () => {

    process.stdout.write(`\n\nGo ${answers[1]} ${answers[0]}, you can finish writing ${answers[2]} later\n\n`);

});

ask(0);

