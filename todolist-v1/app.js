const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

let items = [];
let works = [];

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/todolistDB");
const itemsSchema = {
  name: String,
};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "Welcome to your todolist!",
});
const item2 = new Item({
  name: "hit the + to add item.",
});
const item3 = new Item({
  name: "<-- hit this to delete item.",
});

const defualtItems = [item1, item2, item3];

app.get("/", function (req, res) {
  Item.find({}, function (err, foundItems) {
    if (foundItems.length === 0) {
      Item.insertMany(defualtItems, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("added to DB.");
        }
      });
      res.redirect("/");
    } else {
      res.render("list", { listTitle: "Today", newListItem: foundItems });
    }
  });
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItem: works });
});
app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const item = new Item({
    name: itemName,
  });
  item.save();
  res.redirect("/");
});

app.post("/delete", function (req, res) {
  const checkedItemId = req.body.checkBox;
  Item.findByIdAndRemove(checkedItemId, function (err) {
    if (!err) {
      console.log("deleted Successfully");
    }
  });
  res.redirect("/");
});
app.listen(3000, () => console.log("server running on port 3000"));
