/* Requiring NPM packages */

const express = require("express");
const ejs = require("ejs");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const _ = require("lodash");

/* Using Express */
const app = express();
const port = 3000;

/* Using Static Files */
app.use(express.static(__dirname + "/public"));

/* Using ejs */
app.set("view engine", "ejs");

/* Using Body-Parser */
app.use(bodyParser.urlencoded({ extended: true }));

/* Fetching API data */
let nation = "Not Chosen";
let year = "Not Chosen";
let myStatePopulation = "TBD";

const data = async (nation, year) => {
  const response = await fetch(
    "https://datausa.io/api/data?drilldowns=State&measures=Population&year=" +
      year
  );
  const myJson = await response.json();

  const allState = myJson.data;
  let myState = allState.find((x) => x.State === nation);
  myStatePopulation = myState.Population;
  console.log(myStatePopulation);
};

// data();
/* Starting the server */
app.get("/", function (req, res) {
  res.render("index", {
    content: "United States Population",
    state: nation,
    year: year,
    population: myStatePopulation,
  });
});

/* Posting Data */

app.post("/", function (req, res) {
  if (req.body.stateName && req.body.yearDate) {
    nation = _.capitalize(req.body.stateName);
    year = Number(req.body.yearDate);

    data(nation, year);
    res.redirect("/");
  } else {
    nation = "Not Chosen";
    year = "Not Chosen";
    myStatePopulation = "TBD";
    console.log("redirecting to main page");
    res.redirect("/");
  }
});

app.listen(port, () => console.log("app is running on port : " + port));
