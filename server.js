let express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).sendfile("public/index.html");
});
module.exports = app;