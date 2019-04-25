const path = require('path');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: './index.js',
	
	output: {
		filename: 'main.js',
		path: path.join(__dirname, 'dist'),
	},
	
	module: {
		rules: [
		{
			test: /\.js$/,
			loader: 'babel-loader'
		}
		]
	},
	
	resolve: {
		extensions: ['.js']
	},
	
	watch: false
}