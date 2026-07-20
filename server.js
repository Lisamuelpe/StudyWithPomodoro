const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "public", "index.html"));
    } catch (error) {
        console.error("Error occurred while serving the index page:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = app;