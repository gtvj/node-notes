let http = require("http"),
    data = require("./lib/some_data");

http.createServer(function (req, res) {

    let data_to_send = false;

    switch (req.url) {
        case "/":
            data_to_send = data;
            break;
        case "/instock":
            data_to_send = listInStock(data);
            break;
        case "/onorder":
            data_to_send = listOnBackOrder(data);
            break;
    }

    if (data_to_send) {
        res.writeHead(200, {"Content-Type": "text/json"});
        res.end(JSON.stringify(data_to_send))
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("No data found")
    }


}).listen(3000);

console.log("Server listening on port 3000");


function listInStock(data) {
    return data.filter(item => item.avail === "In stock");
}

function listOnBackOrder(data) {
    return data.filter(item => item.avail === "On back order");
}