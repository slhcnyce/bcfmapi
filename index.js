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

  
  })
app.listen(PORT,
  () => console.log("http://localhost:8080 Online!")
  )