/* Requiring NPM packages */
const express = require("express");
const ejs = require("ejs");

/* Using Express */
const app = express();
const port = 3000;

/* Using Handlebars */

app.set("view engine", "ejs");

/* Fetching API data */
const data = async () => {
  const response = await fetch(
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population&year=latest"
  );
  const myJson = await response.json();
  const nation = myJson.data[0].Nation;
  const year = myJson.data[0].Year;
  const population = myJson.data[0].Population;
};

/* Starting the server */
app.get("/", function (req, res) {
  res.render("index", { content: "hello worsdsdsadld!" });
});

app.listen(port, () => console.log("app is running on port : " + port));
data();
