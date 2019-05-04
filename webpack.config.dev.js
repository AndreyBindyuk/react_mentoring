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
		},
		{
			test: /\.css$/, 
			use: ['style-loader', 'css-loader']
		},
		{
			test: /\.(woff|woff2|ttf|svg|eot)$/,
			use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
		}
		]
	},
	
	plugins: [
		new HtmlWebpackPlugin({
			template: "../dist/index.html",
			filename: "index.html",
			hash: true
		})
	],
	
	resolve: {
		extensions: ['.js']
	},
	
	watch: false
}