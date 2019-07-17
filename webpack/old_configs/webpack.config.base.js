const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.join(__dirname, '../src'),
	entry: './index.js',
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
			test: /\.(woff|woff2|ttf|svg|eot|png|jpg)$/,
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
			template: "../src/index.html",
			filename: "index.html",
			hash: true
		})
	],
	
	resolve: {
		extensions: ['.js']
	},
	
	watch: false
}