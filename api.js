const express = require('express')
const request = require("request")
const app = express()
PORT = 8080

app.get('/', function (req, res) {
  res.send({"firstname": "Salihcan", "lastname": "Yüce"})
})

app.get('/temperature', function (req, res) {

  var tempinfo = "";
  requestedcity = req.query.city
  const axios = require('axios'),
  url = "https://api.openweathermap.org/data/2.5/weather?q=" + requestedcity + "&appid=51a0e25eb9805b361fdec0c4e4a094ea&units=metric";
axios.get(url)
    .then (response => { 
tempinfo = (response.data.main.temp);
var tempdata = ({"temperature":tempinfo});
var tempdata = JSON.stringify(tempdata);
var parseddata = JSON.parse(tempdata);
res.send(parseddata);
})
.catch(error => {
console.error(error);
})
 })
app.listen(PORT,
  () => console.log("http://localhost:8080 Online!")
  )