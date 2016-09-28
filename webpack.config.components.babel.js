import fs from 'fs'
import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import packageInfo from './package.json'
const outputPath = path.join(__dirname, 'node_modules', '@serverless', 'ui-components')
const srcPath = path.join(__dirname, 'src')
const componentsPath = path.join(__dirname, '/src/components')
let componentExternals = []
let entryPoints = {}

// Assign entry points and externals
fs.readdirSync(componentsPath).filter(function (x) {
  return x !== '.DS_Store' && x !== 'index.js' && !x.match(/\.md/)
}).forEach((component, index) => {
  /* define component entry points  */
  entryPoints[component] = ['./src/components/' + component]
  /* extern individual Components for smaller code */
  componentExternals.push('../' + component)
})

console.log('processing', componentExternals)

const externals = []
  .concat(Object.keys(packageInfo.dependencies))
  .concat(componentExternals)
// console.log('externals', externals)

/* export webpack config */
module.exports = {
  entry: entryPoints,
  output: {
    path: outputPath,
    filename: '[name]/index.js',
    publicPath: '/dist/',
    libraryTarget: 'commonjs2',
    library: packageInfo.name
  },

  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.jsx']
  },

  externals: externals,
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('[name]/[name].css?[hash]-[chunkhash]-[contenthash]-[name]', {
      disable: false,
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
  ],

  module: {
    loaders: [
      { test: /\.js/,
        loaders: ['babel'],
        include: srcPath
      },
      { test: /\.css/, loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?localIdentName=[hash:base64:5]&what!postcss-loader', {
            keepCSSFileReference: true
          })
      },
      { test: /\.md?$|\.json?$/,
        loaders: ['raw'],
        include: srcPath
      },
      { test: /\.svg$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      { test: /\.png$/,
        loader: 'url',
        query: { limit: 8192, mimetype: 'image/png' }
      }
    ]
  },
  postcss: (webpack) => [
    // require("stylelint")(),
    require('postcss-cssnext')({ browsers: 'last 2 versions' }),
    // require('postcss-import')({
    //   addDependencyTo: webpack
    // }),
    // require("postcss-reporter")(),
    /* do math with resolve( ) */
    require('postcss-math'),
    /* require global variables */
    require('postcss-simple-vars')({
      variables: function variables () {
        // var file = './src/_variables.js';
        // delete require.cache[path.join(__dirname, file)];
        // return require(file);
        var vars = require('./src/_variables')
        // console.log('global css vars', vars)
        return vars
      },
      onVariables: function (variables) {
        // console.log(variables)
      },
      unknown: function unknown (node, name, result) {
        node.warn(result, 'Unknown variable ' + name)
      }
    }),
    /* enable nested css selectors like Sass/Less */
    require('postcss-nested'),
  ],
}
