/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
import jsmd5 from 'js-md5'
let loginBoxCtrl = function ($scope, fetchUtil) {
  let vm = this
  console.log(jsmd5)
  vm.account = {}
  vm.signin = function () {
    vm.account.password = jsmd5(vm.account.password)
  }
}
loginBoxCtrl.$inject = ['$scope', 'fetchUtil']
export default loginBoxCtrl
