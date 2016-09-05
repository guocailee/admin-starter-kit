/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
export default function () {
  return function (text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : ''
  }
}
