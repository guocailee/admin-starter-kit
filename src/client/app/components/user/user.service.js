/**
 *  @author guocailee
 *  @Date   2016-08-12
 */
export default (fetchUtil, $cookies) => {
  'ngInject'
  let signin = account => {

  }

  let getUserInfo = () => {
    if (localStorage && localStorage.getItem) {
      return JSON.parse(localStorage.getItem('userInfo') || '{}')
    } else {
      return $cookies.getObject('userInfo')
    }
  }
  let setUserInfo = (userInfo) => {
    if (localStorage && localStorage.setItem) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    } else {
      $cookies.setObject('userInfo')
    }
  }
  return {
    signin,
    getUserInfo,
    setUserInfo
  }
}
