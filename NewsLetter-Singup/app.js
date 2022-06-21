const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static(__dirname + "/"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/singup.html");
});
app.post("/", function (req, res) {
  const firstName = req.body.fname;
  const lastName = req.body.lname;
  const email = req.body.email;
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);
  const url = "https://us8.api.mailchimp.com/3.0/lists/e56bc3fcd4";
  options = {
    method: "POST",
    auth: "kamran11:cb1d239a8b2fc9de7abd22e7e7a24560-us8",
  };
  const requestchimp = https.request(url, options, function (response) {
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });
  requestchimp.write(jsonData);
  requestchimp.end;
});

app.listen(3000, () => console.log("app is running at port 3000"));

/* API key */
// cb1d239a8b2fc9de7abd22e7e7a24560-us8
/* Audience ID */
// e56bc3fcd4
