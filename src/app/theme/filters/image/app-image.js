/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
export default function (layoutPaths) {
  'ngInject'
  return function (input) {
    return layoutPaths.images.root + input
  }
}
