const express = require("express");
const app = express();
const https = require("https");

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=50c8eac93afe4cd51672ebfa0aa65aa1&units=metric";
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      console.log(weatherData.main.feels_like);
      console.log(weatherData.weather[0].description);
      res.send(" <div><h1> temp is : " + weatherData.main.temp + " celcius </h1>
      <h2> dexription : " + weatherData.weather[0].description + "</h>" "
      </div>"
      );
    });
  });
});
app.listen(3000, () => console.log("server is running at port 3000!"));
