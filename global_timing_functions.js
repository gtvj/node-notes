let waitTime = 3000,
    currentTime = 0,
    waitInterval = 100,
    percentWaited = 0;

function writeWaitingPercent(p) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
}

let interval = setInterval(() => {
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime / waitTime) * 100);
    writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout(() => {
    clearInterval(interval);
    writeWaitingPercent(100);
    console.log("\nDone! \n");
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);