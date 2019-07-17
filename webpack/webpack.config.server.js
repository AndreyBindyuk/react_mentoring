const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const common = require("./webpack.config.common");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(common, {
  name: "server",
  target: "node",
  entry: "./src/serverRenderer.js",
  externals: [nodeExternals()],
  output: {
    filename: "js/serverRenderer.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        include: /src/,
        use: [
          {
            loader: "css-loader",
            options: {
              exportOnlyLocals: true,
              modules: true,
              localIdentName: '[name]-[hash:5]',
            }
          }
          //   'css-loader/locals', // It doesn't embed CSS but only exports the identifier mappings.
        ]
      },
    ]
  }
});
