// This is a WebSocket server

let WebSocketServer = require("ws").Server;
let wss = new WebSocketServer({port: 3000});

// A listener for new connections (ws is a new connected endpoint)
wss.on("connection", ws => {

    ws.on("message", message => {

        if (message === 'exit') {
            ws.close();
        } else {
            wss.clients.forEach(client => {
                client.send(message)
            });
        }
    });

    ws.send("Welcome to cyber chat");

});