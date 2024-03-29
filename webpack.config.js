/**
 * @tutorial https://webpack.js.org/configuration/ 
 */



const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/app.ts",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/dist",
	},
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	devServer: {
		static: [
			{
				publicPath: "/",
				serveIndex: true,
				directory: path.join(__dirname, "/public"),
			},
			{
				directory: path.join(__dirname, "/dist"),
				publicPath: "/dist",
			},
			{
				directory: path.join(__dirname, "/src/styles"),
				publicPath: "/styles",
			},
			{
				directory: path.join(__dirname, "/src/img"),
				publicPath: "/img",
			},
		],
	},
};
