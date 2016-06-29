/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
export default function ($q) {
  return {
    loadImg: function (src) {
      var d = $q.defer()
      var img = new Image()
      img.src = src
      img.onload = function () {
        d.resolve()
      }
      return d.promise
    },
    documentLoad: function () {
      var d = $q.defer()
      d.resolve()
      return d.promise
    }
  }
}
