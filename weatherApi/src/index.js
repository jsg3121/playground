// openweathermap api ID = 9c1ca1f34e263d5ef31049a8d5e611c9
// 공공API api ID = 422JryGS9%2B676hcl7wOZ4jh5de2s99vCJr2NcRWV4YXkv9nQP8C0BFGDPVlBt55Fyy5VMJh%2ByRYBMkV%2BcciYZg%3D%3D

const express = require("express");
const axios = require("axios");
const app = express();

const PORT = process.env.PORT || 3000;

// 기상청 테스트
let apiKey = "422JryGS9%2B676hcl7wOZ4jh5de2s99vCJr2NcRWV4YXkv9nQP8C0BFGDPVlBt55Fyy5VMJh%2ByRYBMkV%2BcciYZg%3D%3D";
// axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=${apiKey}&numOfRows=10&pageNo=1&dataType=json&base_date=20210205&base_time=1400&nx=59&ny=125`).then((response) => {
axios.get(`http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=%EC%84%9C%EC%9A%B8&pageNo=1&numOfRows=5&returnType=json&serviceKey=${apiKey}`).then((response) => {
  // console.log(response.data);
  console.log(response.data.response.body.items);
});

app.listen(PORT, () => {
  console.log("server Start!");
});
