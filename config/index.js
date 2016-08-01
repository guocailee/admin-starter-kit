// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  htmlPlugins: [{
    filename: 'home.html',
    chunks: ['app'],
    template: 'src/app/home.html',
    inject: true
  }, {
    filename: 'index.html',
    template: 'src/app/index.html',
    inject: true,
    chunks: ['index'],
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency'
  }, {
    filename: 'login.html',
    chunks: ['login'],
    template: 'src/app/login.html',
    inject: true
  }],
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    home: path.resolve(__dirname, '../dist/home.html'),
    login: path.resolve(__dirname, '../dist/login.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'assets',
    assetsPublicPath: '/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 4000,
    proxyTable: {}
  }
}
