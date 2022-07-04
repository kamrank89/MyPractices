/* Requiring NPM packages */

const express = require("express");
const ejs = require("ejs");
const fetch = require("node-fetch");

/* Using Express */
const app = express();
const port = 3000;

/* Using Handlebars */

app.set("view engine", "ejs");

/* Fetching API data */
let nation = "";
let year = "";
let population = "";
const data = async () => {
  const response = await fetch(
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population&year=2015"
  );
  const myJson = await response.json();
  nation = myJson.data[0].Nation;
  year = myJson.data[0].Year;
  population = myJson.data[0].Population;
  console.log(nation);
  console.log(year);
  console.log(population);
};
data();

/* Starting the server */
app.get("/", function (req, res) {
  res.render("index", {
    content: "test",
    country: nation,
    year: year,
    population: population,
  });
});

app.listen(port, () => console.log("app is running on port : " + port));
