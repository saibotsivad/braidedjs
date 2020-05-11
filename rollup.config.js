import { string } from 'rollup-plugin-string'
import builtins from 'builtin-modules'
import md from 'rollup-plugin-md'
import resolve from '@rollup/plugin-node-resolve'

const browserPlugins = [
	string({
		include: [ '**/*.html' ]
	}),
	resolve({
		browser: true
	}),
	md()
]

const lambdaPlugins = [
	string({
		include: [ '**/*.html' ]
	}),
	resolve({
		browser: false,
		preferBuiltins: true,
	}),
	md()
]

export default [
	// {
	// 	input: './app/node_modules/api-rest/index.js',
	// 	output: {
	// 		format: 'esm',
	// 		file: './service/api-rest/index.js'
	// 	},
	// 	plugins: browserPlugins
	// },
	{
		input: './app/node_modules/api-ws/index.js',
		output: {
			format: 'cjs',
			file: './service/api-ws/index.js'
		},
		plugins: lambdaPlugins,
		external: [ ...builtins, 'aws-sdk/clients/dynamodb' ]
	},
	// {
	// 	input: './app/node_modules/stream-ws/index.js',
	// 	output: {
	// 		format: 'esm',
	// 		file: './service/stream-ws/index.js'
	// 	},
	// 	plugins: browserPlugins
	// },
	// {
	// 	input: './app/node_modules/www-redirect/index.js',
	// 	output: {
	// 		format: 'esm',
	// 		file: './service/www-redirect/index.js'
	// 	},
	// 	plugins: browserPlugins
	// },
	// {
	// 	input: './app/node_modules/www-root/index.js',
	// 	output: {
	// 		format: 'esm',
	// 		file: './service/www-root/index.js'
	// 	},
	// 	plugins: browserPlugins
	// },
]
