let exec = require('child_process').exec;

exec('ls -la', function (err, stdout) {
    if(err) {
        throw err;
    }

    console.log(`Here's the listing`);
    console.log(stdout);

});