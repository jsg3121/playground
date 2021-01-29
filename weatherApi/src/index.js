// openweathermap api ID = 9c1ca1f34e263d5ef31049a8d5e611c9
// 기상청 api ID = 422JryGS9%2B676hcl7wOZ4jh5de2s99vCJr2NcRWV4YXkv9nQP8C0BFGDPVlBt55Fyy5VMJh%2ByRYBMkV%2BcciYZg%3D%3D

const express = require("express");
const axios = require("axios");
const app = express();

const PORT = process.env.PORT || 3000;

let apiKey = "422JryGS9%2B676hcl7wOZ4jh5de2s99vCJr2NcRWV4YXkv9nQP8C0BFGDPVlBt55Fyy5VMJh%2ByRYBMkV%2BcciYZg%3D%3D";

// axios.get("http://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=9c1ca1f34e263d5ef31049a8d5e611c9").then((response) => {
axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=${apiKey}&numOfRows=10&pageNo=1&dataType=JSON&base_date=20210129&base_time=0230&nx=1&ny=1`).then((response) => {
  console.log(response.data.response.body.items);
});

app.listen(PORT, () => {
  console.log("server Start!");
});
