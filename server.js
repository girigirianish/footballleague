const express = require("express");

let app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("build"));

app.listen(PORT, function () {
    console.log("Express server is up and running on port" + PORT);
});
