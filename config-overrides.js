const { addBabelPlugin, addBabelPreset, override, addWebpackModuleRule } = require('customize-cra')

module.exports = override(
  addBabelPlugin([
    'babel-plugin-relay',
    {
      artifactDirectory: './src/__generated__',
    },
  ]),
  addBabelPreset(['@emotion/babel-preset-css-prop', {}]),
  addWebpackModuleRule({
    test: /\.graphql$/,
    use: 'raw-loader',
  })
)
