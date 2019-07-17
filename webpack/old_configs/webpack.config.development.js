const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	
	output: {
		filename: 'main.dev.js',
		path: path.join(__dirname, '../dist'),
	},
	devServer: {
		publicPath: '/',
		historyApiFallback: true
	  }
  
}