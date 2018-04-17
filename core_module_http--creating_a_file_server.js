let http = require("http"),
    fs = require("fs"),
    path = require("path");

http.createServer(function (req, res) {

    console.log(`${req.method} request for ${req.url}`);

    if (req.url === "/") {

        // If request is for the root, send the content of index.html

        fs.readFile("./public/index.html", "UTF-8", function (err, html) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });

    } else if (req.url.match(/css$/)) {

        // If url ends with css, send the corresponding CSS file

        let cssPath = path.join(__dirname, 'public', req.url),
            fileStream = fs.createReadStream(cssPath, "UTF-8");

        res.writeHead(200, {"Content-Type": "text/css"});

        fileStream.pipe(res);

    } else if (req.url.match(/jpg$/)) {

        // If url ends with jpg, send the corresponding image

        let imgPath = path.join(__dirname, 'public', req.url),
            imgStream = fs.createReadStream(imgPath);

        res.writeHead(200, {"Content-Type": "image/jpeg"});

        imgStream.pipe(res);

    } else {

        // If none of the other routes are matched, send a 404

        res.writeHead(404, {"Content-Type": "text/plain"});

        res.end("404 File Not Found");
    }

}).listen(3000);


console.log("File server running on port 3000");
