import resolve from '@rollup/plugin-node-resolve'

const plugins = [
	resolve({
		browser: true
	})
]

export default [
	{
		input: './app/node_modules/api-rest/index.js',
		output: {
			format: 'esm',
			file: './service/api-rest/index.js'
		},
		plugins
	},
	{
		input: './app/node_modules/api-ws/index.js',
		output: {
			format: 'esm',
			file: './service/api-ws/index.js'
		},
		plugins
	},
	{
		input: './app/node_modules/stream-ws/index.js',
		output: {
			format: 'esm',
			file: './service/stream-ws/index.js'
		},
		plugins
	},
	{
		input: './app/node_modules/www-redirect/index.js',
		output: {
			format: 'esm',
			file: './service/www-redirect/index.js'
		},
		plugins
	},
]
