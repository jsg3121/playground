//openweathermap api ID = 9c1ca1f34e263d5ef31049a8d5e611c9
const express = require("express");
const axios = require("axios");
const app = express();
// const { AerisWeather } = require("@aerisweather/javascript-sdk");

const PORT = process.env.PORT || 3000;

axios
  .get(
    "http://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=9c1ca1f34e263d5ef31049a8d5e611c9"
  )
  .then((response) => {
    console.log(response.data);
  });

app.listen(PORT, () => {
  console.log("server Start!");
});

// const aeris = new AerisWeather(
//   "xtUkRVEOTI2zADuBhWEp4",
//   "QhQDJDHFFC0slTK83170J6kLyTfhbwJiMpIHSG6g"
// );

// aeris
//   .api()
//   .endpoint("observations")
//   .place(":auto")
//   .get()
//   .then((result) => {
//     var data = result.data.ob;
//     console.log(data);
//     console.log(
//       `The current weather is ${data.weatherPrimary.toLowerCase()} and ${
//         data.tempF
//       } degrees.`
//     );
//   });
