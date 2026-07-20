let server = require("./server");

server.get("/", (req, res) => {
  res.send("Hello World!");
});