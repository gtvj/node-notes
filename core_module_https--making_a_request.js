let https = require("https"),
    fs = require("fs"),
    options = {
        hostname: "en.wikipedia.org",
        port: 443,
        path: "/wiki/Twickenham",
        method: "GET"
    };

let req = https.request(options, res => {

    let responseBody = "";

    console.log("Response from server started.");
    console.log(`Server Status: ${res.statusCode} `);
    console.log("Response Headers: %j", res.headers);

    res.setEncoding("UTF-8");

    res.once("data", chunk => {
        console.log(chunk);
    });

    res.on("data", chunk => {
        console.log(`Chunk: ${chunk.length}`);
        responseBody += chunk;
    });

    res.on("end", () => {
        fs.writeFile("twickenham.html", responseBody, function (err) {
            if (err) {
                throw err;
            }
            console.log("File Downloaded");
        });
    });

});

req.on("error", function (err) {
    console.log(`problem with request: ${err.message}`);
});

req.end();

