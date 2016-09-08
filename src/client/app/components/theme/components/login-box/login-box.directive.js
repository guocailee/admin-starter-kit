/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
import loginBoxHtml from 'ngtemplate!html!./login-box.html'
import loginBoxCtrl from './login-box.ctrl'
export default function () {
  return {
    restrict: 'E',
    templateUrl: loginBoxHtml,
    controller: loginBoxCtrl,
    controllerAs: 'vm'
  }
}
