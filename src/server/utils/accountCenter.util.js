var config = require('../config')
var request = require('request')
var _ = require('lodash')
var host = config.hosts.accountCenter
module.exports = {
  post: function (sid, requestMessage) {
    var message = _.cloneDeep(config.message)
    if (requestMessage) {
      _.merge(message, requestMessage)
    }
    message.sid = sid
    return request.post(host, {
      json: true,
      body: message
    })
  }
}
