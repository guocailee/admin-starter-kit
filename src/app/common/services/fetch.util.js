/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
export default function ($http, $q) {
  let fetchUtil = (url, params) => {
    let defer = $q.defer()
    $http.post(url, params).then((data) => {
      defer.resolve(data)
    }, (data) => {
      defer.reject(data)
    })
    return defer.promise
  }
  return {
    fetchUtil
  }
}
