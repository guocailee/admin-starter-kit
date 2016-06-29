/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
export default function () {
  return {
    restrict: 'AE',
    templateUrl: function (ele, attrs) {
      return attrs.includeWithScope
    }
  }
}
