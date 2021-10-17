var http = require("http");

function handler(req, res) {
    console.log("Receiving a new request...");
    res.end("Hello Diego!");
};

var server = http.createServer(handler);

server.listen(2002);