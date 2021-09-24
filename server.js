const express = require("express");
const app = express();
const axios = require("axios");
var cors = require("cors");
app.use(cors());
// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

const port = 3000;
const apiKey = "AIzaSyByYF8xglRa9Hvc4PlFzixarju6wCc5TEg";
app.get("/pgfinder/:address", async (req, res) => {
  const address = req.params.address;
  const adsplit = address.split(" ");

  let adquery = "";
  for (let piece of adsplit) {
    if (piece !== "") adquery += piece + "+";
  }
  adquery = adquery.substring(0, adquery.length - 1);

  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${adquery}&key=${apiKey}`
  );
  const lat = response.data.results[0].geometry.location.lat;
  const lng = response.data.results[0].geometry.location.lng;
  const responsesPG = await axios.get(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=10000&type=bank&key=${apiKey}`
  );
  setTimeout(async()=>{
    if (responsesPG.data.next_page_token) {
      const resPG = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=10000&type=bank&key=${apiKey}&pagetoken=${responsesPG.data.next_page_token}`
      );
      responsesPG.data.results=[...responsesPG.data.results,...resPG.data.results]
  

      
      var placeDetails = [];
      placeDetails = await Promise.all(
        responsesPG.data.results.map(async (place) => {
          const query = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=name,rating,formatted_phone_number,website,vicinity&key=${apiKey}`;
          const result = await axios.get(query);
    
          return result.data.result;
        })
      );
    
      res.send(placeDetails);
  }},2000)
    // if (responsesPG.data.next_page_token) {
    // const resPG = await axios.get(
    //   `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=10000&type=bank&key=${apiKey}&pagetoken=${responsesPG.data.next_page_token}`
    // );
    // responsesPG.data.results=[...responsesPG.data.results,...resPG.data.results]
   
});

app.get("/", async (req, res) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=28.549068799999997,77.21589589999999&radius=1500&type=restaurant&keyword=cruise&key=${apiKey}`
  );

  var data = await Promise.all(
    response.data.results.map(async (place) => {
      const query = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=name,rating,formatted_phone_number,website,vicinity&key=${apiKey}`;
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
