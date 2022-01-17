const WebSocketServer = require("ws");

const wss = new WebSocketServer.Server({
  port: 5001,
});

wss.on("connection", (ws) => {
  console.log("new client connected");

  ws.onerror =  ()=> {
    console.log("An error occured");
  };
});

console.log("Websocker running on 127.0.0.1:5001");
