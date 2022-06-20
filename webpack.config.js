const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === 'development'

  return {
    entry: ['@babel/polyfill', './src/js/app.js'],
    output: {
      filename: 'app.js',
      chunkFilename: `[name].bundle.js?${(+new Date)}`,
      publicPath: `/SSG_pug-postcss-js_boilerplate/feature/js/@${env.ver_js}/`,
      path: path.join(__dirname, `${env.path_dist}/SSG_pug-postcss-js_boilerplate/feature/js/@${env.ver_js}/`),
      jsonpFunction: 'SSG_pug-postcss-js_boilerplate'
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@utilities': path.resolve(__dirname, './src/js/utilities'),
        '@modules': path.resolve(__dirname, './src/js/modules'),
        '@namespaces': path.resolve(__dirname, './src/js/namespaces')
      }
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    devtool: IS_DEVELOPMENT ? 'source-map' : 'none',
    optimization: {
      minimizer: IS_DEVELOPMENT ? [] : [
        new TerserPlugin({
          terserOptions: {
            compress: { drop_console: true }
          }
        })
      ]
    }
  }
}
