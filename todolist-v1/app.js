const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function (req, res) {
  var today = new Date();

  if (today.getDay() === 6 || today.getDay() === 0) {
    res.send("yay it's the weekend");
  } else {
    res.send("boo i have to work!");
  }
});

app.listen(3000, () => console.log("server running on port 3000"));
