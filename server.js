const express = require("express");

const desiredport = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(desiredport, () => {
    console.log("Server is running on port " + desiredport);
});