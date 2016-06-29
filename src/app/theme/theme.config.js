/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
export default function (zkConfigProvider, colorHelper) {
  zkConfigProvider.changeTheme({
    blur: false
  })
  zkConfigProvider.changeColors({
    default: 'rgba(#000000, 0.2)',
    defaultText: '#000000',
    dashboard: {
      white: '#ffffff'
    }
  })
}
