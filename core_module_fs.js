/**
 * Remember: all methods in the fs modules have both sync and async versions.
 *           You should use the sync version only at startup, and avoid them
 *           while your app is running
 */

let fs = require("fs");

fs.readdir('./lib', function (err, files) {

    if (err) {
        throw err;
    }

    console.log(files);

});

console.log("Reading Files...");
