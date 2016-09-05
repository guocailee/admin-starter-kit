/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
export default function () {
  return {
    scope: {
      scrollPosition: '=',
      maxHeight: '='
    },
    link: function (scope) {
      $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop() > scope.maxHeight
        if (scrollTop !== scope.prevScrollTop) {
          scope.$apply(function () {
            scope.scrollPosition = scrollTop
          })
        }
        scope.prevScrollTop = scrollTop
      })
    }
  }
}
