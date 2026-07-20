import express from "express";

export const server = express();

let desiredport = process.env.PORT || 3000;

server.get("/", (req, res) => {
  res.send("Hello World!");
});


