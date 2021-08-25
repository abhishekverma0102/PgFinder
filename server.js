const express = require("express");
const app = express();
const axios = require("axios");
const port = 3000;
var cors = require("cors");
app.use(cors());
// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

app.get("/", async (req, res) => {
  const response = await axios.get(
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=28.549068799999997,77.21589589999999&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyByYF8xglRa9Hvc4PlFzixarju6wCc5TEg"
  );

  var data = await Promise.all(
    response.data.results.map(async (place) => {
      const query = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=name,rating,formatted_phone_number,website,vicinity&key=AIzaSyByYF8xglRa9Hvc4PlFzixarju6wCc5TEg`;
      const result = await axios.get(query);
      return result.data.result;
    })
  );
  console.log(data);
  // .then((response) => {
  res.send(data);
  // });
});

app.listen(port, () => console.log("app running"));
