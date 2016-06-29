/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
export default function (layoutPaths) {
  return function (input) {
    return layoutPaths.images.root + 'theme/icon/kameleon/' + input + '.svg'
  }
}
