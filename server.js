const express = require("express");
const path = require("path");

const server = express();

server.use(express.static(path.join(__dirname, "public")));

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

module.exports = server;