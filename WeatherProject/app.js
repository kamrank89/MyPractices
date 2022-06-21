const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  console.log("post recieved");
  console.log(req.body.cityName);
  const query = req.body.cityName;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=50c8eac93afe4cd51672ebfa0aa65aa1&units=metric";
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      console.log(weatherData.main.feels_like);
      console.log(weatherData.weather[0].description);
      res.send(
        " <h1> temp in " +
          query +
          " is : " +
          weatherData.main.temp +
          " celcius </h1>"
      );
    });
  });
});

app.listen(3000, () => console.log("server is running at port 3000!"));
