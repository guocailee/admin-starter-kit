/**
 *  @author guocailee
 *  @Date   2016-07-07
 */
export default function ($q, fetchUtil) {
  'ngInject'
  let login = () => {
    let defer = $q.defer()
    return defer.promise
  }
  return {
    login: login
  }
}
