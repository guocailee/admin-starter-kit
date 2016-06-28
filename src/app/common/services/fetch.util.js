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
