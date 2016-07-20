import $ from 'jquery'
import backTopHtml from 'ngtemplate!html!./back-top.html'
import './jquery.backTop.js'

export default function () {
  return {
    restrict: 'E',
    templateUrl: backTopHtml,
    controller: function () {
      $('#backTop').backTop({
        'position': 200,
        'speed': 100
      })
    }
  }
}
