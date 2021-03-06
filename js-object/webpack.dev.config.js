/**
 * Created by Administrator on 2018/9/4 0004.
 */
const entryTestType = require("./entryTestType/index");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: entryTestType.simpleFactory,
	output: {
		path: __dirname,
		filename: './release/bundle.js'
	},
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /(node_modules)/,
			loader: "babel-loader"
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html"
		})
	],
	devServer: {
		contentBase: path.join(__dirname, './release'), //根目录
		open: true,
		port: 9000
	}
}