let fs = require("fs"),
    stream = fs.createReadStream("./README.md", "UTF-8"),
    data = "";


stream.once("data", () => console.log("Started Reading File\n"));

stream.on("data", chunk => {
    process.stdout.write(`chunk: ${chunk.length}\n`);
    data += chunk;
});

stream.on("end", () => console.log(`Finished Reading File ${data.length}`));