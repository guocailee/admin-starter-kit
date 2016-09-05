var express = require('express')
var config = require('./config')
var port = process.env.PORT || config.port
var app = express()
var bodyParser = require('body-parser')

console.log('Download Center Starting..')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('./dist'))

app.use('/apiv1/file', require('./routers/file'))
app.use('/apiv1/softtype', require('./routers/softtype'))
app.use('/apiv1/software', require('./routers/software'))
app.use('/apiv1/user', require('./routers/user'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
