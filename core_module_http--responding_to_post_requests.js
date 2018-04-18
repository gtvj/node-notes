let http = require("http"),
    fs = require("fs");

http.createServer((req, res) => {

    if (req.method === "GET") {

        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./lib/form.html", "UTF-8").pipe(res);

    } else if (req.method === "POST") {

        let body = "";

        // Because req is a stream
        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(`<!DOCTYPE html><html><head><title>Form Results</title></head><body><h1>Your Form Results</h1><p>${body}</p></body></html>`);
        });
    }
}).listen(3000);

console.log("Form server listening on port 3000");
