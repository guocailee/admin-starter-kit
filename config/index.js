// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  entrys: {
    app: './src/client/entrys/home.js',
    signin: './src/client/entrys/signin.js',
    index: './src/client/entrys/index.js'
  },
  htmlPlugins: [{
    filename: 'home.html',
    chunks: ['app'],
    template: 'src/client/app/views/home/home.html',
    inject: true
  }, {
    filename: 'index.html',
    template: 'src/client/app/views/index/index.html',
    inject: true,
    chunks: ['index'],
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency'
  }, {
    filename: 'signin.html',
    chunks: ['signin'],
    template: 'src/client/app/views/signin/signin.html',
    inject: true
  }],
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'assets',
    assetsPublicPath: '/',
    productionSourceMap: true,
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
    proxyTable: {
      '/apiv1/': 'http://localhost:9100'
    }
  },
  prod: {
    env: require('./prod.env'),
    port: 4000,
    proxyTable: {}
  }
}
