const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("baghali");
});

app.listen(3000);
