/**
 *
 * Note:    this is an example of fs.readfile but it also makes use of:
 *              - path (to manage paths)
 *              - stat (the synchronous version) to determine if we're dealing with a file
 *              - readdir
 *
 * */

let fs = require("fs");
let path = require("path");

fs.readdir("./lib", function (err, files) {

    if (err) {
        throw err;
    }

    files.forEach(function (fileName) {

        let file = path.join(__dirname, "lib", fileName),
            stats = fs.statSync(file);

        if (stats.isFile() && fileName !== ".DS_Store") {

            fs.readFile(file, "UTF-8", function (err, contents) {

                if (err) {
                    throw err;
                }

                console.log(contents);

            });

        }
    });

});