const fs = require("fs");
const http = require("http");
const url = require("url");

const json = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
  // url.parse()
  console.log(req.url);

  res.writeHead(200, { "Content-type": "text/html" });
  res.end("This is the respone!");
});

server.listen(1337, "127.0.0.1", () => {
  console.log("Listening for requests now");
});
