/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
export default function (layoutPaths) {
  'ngInject'
  return function (input, ext) {
    ext = ext || 'png'
    return layoutPaths.images.profile + input + '.' + ext
  }
}
