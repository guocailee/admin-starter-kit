/**
 *  @author guocailee
 *  @Date   2016-06-29
 */

var fetchUtil = function (message, $http, $q) {
  'ngInject'
  var ts = this
  this.message = angular.copy(message)
  var processData = function (data) {
    let defer = $q.defer()
    defer.resolve(data)
    return defer.promise
  }
  this.init = (params) => {
    ts.message = params
  }
  this.addPayload = (payload) => {
    angular.extend(ts.message.payload, payload)
  }
  this.addParams = (params, isAdd) => {
    angular.extend(ts.message.payload.params, params)
  }
  let send = (url, method) => {
    method = method || 'post'
    let defer = $q.defer()
      // post message reset
    var postMessage = angular.copy(ts.message)
    ts.message = angular.copy(message)
    $http[method](url, postMessage).then((data) => {
      return processData(data)
    }).then(function (resp) {
      defer.resolve(resp.data)
    }).catch((data) => {
      defer.reject(data)
    })
    return defer.promise
  }
  this.get = (url) => {
    return send(url, 'get')
  }
  this.put = (url) => {
    return send(url, 'put')
  }
  this.post = (url) => {
    return send(url, 'post')
  }
  this.delete = (url) => {
    return send(url, 'delete')
  }
}

export default fetchUtil
