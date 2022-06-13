const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test");

const personschema = new mongoose.Schema({
  _id: Number,
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personschema);

const person = new Person({
  _id: 1,
  name: "john",
  age: 37,
});

// person.save();
// Person.find(function (err, people) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(people);
//     // mongoose.connection.close();
//   }
// });

// Person.updateOne({ _id: 1 }, { name: "kamran" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("updated");
//   }
// });

Person.deleteOne({ name: "kamran" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("deleted");
    mongoose.connection.close();
  }
});
