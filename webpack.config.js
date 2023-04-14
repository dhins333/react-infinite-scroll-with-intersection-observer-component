/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.js',
		library: {
			type: 'umd'
		}
	},
	mode: 'production',
	resolve: {
		extensions: ['.tsx']
	},
	module: {
		rules: [
			{
				test: /\.tsx$/,
				use: ['babel-loader', 'ts-loader']
			}
		]
	},
	externals: [nodeExternals()]
}