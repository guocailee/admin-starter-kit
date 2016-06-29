import $ from 'jquery'
export default function () {
  return {
    restrict: 'E',
    templateUrl: 'app/theme/components/backTop/backTop.html',
    controller: function () {
      $('#backTop').backTop({
        'position': 200,
        'speed': 100
      })
    }
  }
}
