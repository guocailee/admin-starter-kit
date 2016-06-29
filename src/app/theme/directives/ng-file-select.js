/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
export default function () {
  return {
    link: function ($scope, el) {
      el.bind('change', function (e) {
        $scope.file = (e.srcElement || e.target).files[0]
        $scope.getFile()
      })
    }
  }
}
