var http = require("http"),
    fs = require("fs");

http.createServer((req, res) => {
    fs.readFile("./index.html", (err, data) => {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.write(JSON.stringify({
            name: "Diego",
            username: "diegomurillo"
        }));
        res.end();
    });
}).listen(2002);