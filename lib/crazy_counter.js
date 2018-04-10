let count = 0;

let interval =  setInterval(() => {
    count += 1;
    process.stdout.write(`Count is: ${count}\n`)
}, 500);

process.stdin.on('data', function (data) {
    console.log(`stdin data received: ${data.toString().trim()}`);
    clearInterval(interval);
    process.exit();
});