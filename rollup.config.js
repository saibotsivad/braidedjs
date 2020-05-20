import { string } from 'rollup-plugin-string'
import builtins from 'builtin-modules'
import commonjs from '@rollup/plugin-commonjs'
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
	resolve({
		browser: false,
		preferBuiltins: true,
	}),
	commonjs(),
	md()
]

const webSocketConfigs = [ 'connect', 'disconnect', 'pubsub', 'auth' ]
	.map(key => ({
		input: `./app/node_modules/api-ws/${key}.js`,
		output: {
			format: 'cjs',
			file: `./service/api-ws/${key}.js`
		},
		plugins: lambdaPlugins,
		external: [
			...builtins,
			'aws-sdk/clients/apigatewaymanagementapi',
			'aws-sdk/clients/dynamodb'
		]
	}))

export default [
	// {
	// 	input: './app/node_modules/api-rest/index.js',
	// 	output: {
	// 		format: 'esm',
	// 		file: './service/api-rest/index.js'
	// 	},
	// 	plugins: browserPlugins
	// },
	...webSocketConfigs,
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
