const express = require("express");
const bodyParser = require("body-parser");

let items = [];
let works = [];

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var day = today.toLocaleDateString("en-US", options);
  res.render("list", { listTitle: day, newListItem: items });
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItem: works });
});
app.post("/", function (req, res) {
  var item = req.body.newItem;
  if (req.body.list === "Work List") {
    works.push(items);
    res.redirect("/work");
  } else {
    items.push(item);

    res.redirect("/");
  }
});

app.listen(3000, () => console.log("server running on port 3000"));
