var express = require('express')
var config = require('./config')
var port = process.env.PORT || config.port
var app = express()
var bodyParser = require('body-parser')

console.log('Download Center Starting..')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
