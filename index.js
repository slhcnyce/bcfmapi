const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send({"firstname": "Salihcan", "lastname": "Yüce"})
})

app.listen(3000)