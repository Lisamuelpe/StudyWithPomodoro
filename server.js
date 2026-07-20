const express = require("express");
const server = express();

server.use(express.static("public"));

server.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = server;
