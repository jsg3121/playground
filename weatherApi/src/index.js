// openweathermap api ID = 9c1ca1f34e263d5ef31049a8d5e611c9
// 공공API api ID = 422JryGS9%2B676hcl7wOZ4jh5de2s99vCJr2NcRWV4YXkv9nQP8C0BFGDPVlBt55Fyy5VMJh%2ByRYBMkV%2BcciYZg%3D%3D

const express = require("express");
const axios = require("axios");
const app = express();

const PORT = process.env.PORT || 3000;

// 기상청 테스트
let apiKey = "9c1ca1f34e263d5ef31049a8d5e611c9";
axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=37.4066544&lon=127.09255&appid=${apiKey}`).then((response) => {
  // console.log(response.data);
  console.log(response.data);
});

app.listen(PORT, () => {
  console.log("server Start!");
});
