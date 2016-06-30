/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
var fetchUtil = function ($http, $q) {
  'ngInject'
  let post = (url, params) => {
    let defer = $q.defer()
    $http.post(url, params).then((data) => {
      defer.resolve(data)
    }, (data) => {
      defer.reject(data)
    })
    return defer.promise
  }
  return {
    post
  }
}
fetchUtil.$inject = ['$http', '$q']
export default fetchUtil
