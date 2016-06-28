var express = require('express')
var config = require('../config')
var proxyMiddleware = require('http-proxy-middleware')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
  // Define HTTP proxies to your custom API backend
  // https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// serve pure static assets
app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
