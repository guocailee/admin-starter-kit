/**
 *  @author guocailee
 *  @Date   2016-07-20
 */
import mainHtml from 'ngtemplate!html!./main.html'
import mainCtrl from './main.ctrl'
export default function ($window) {
  'ngInject'
  return {
    restrict: 'E',
    controller: mainCtrl,
    templateUrl: mainHtml,
    link: function ($scope) {},
    scope: {
      softTypeList: '=?',
      download: '=?'
    }
  }
}
