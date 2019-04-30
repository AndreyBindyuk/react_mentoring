const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: './index.js',
	
	devtool: 'source-map',
	
	output: {
		filename: 'main.dev.js',
		path: path.join(__dirname, 'dist'),
	},
	
	module: {
		rules: [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			use: ["babel-loader"]
		}
		]
	},
	
	plugins: [
		new HtmlWebpackPlugin()
	],
	
	resolve: {
		extensions: ['.js']
	},
	
	watch: false
}