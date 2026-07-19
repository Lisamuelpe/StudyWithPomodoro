let express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).sendfile(__dirname + "/index.html");
});

module.exports = app;