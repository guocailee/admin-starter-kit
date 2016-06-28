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
