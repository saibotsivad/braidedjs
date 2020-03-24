import { string } from 'rollup-plugin-string'
import md from 'rollup-plugin-md'
import resolve from '@rollup/plugin-node-resolve'

const plugins = [
	string({
		include: [ '**/*.html' ]
	}),
	resolve({
		browser: true
	}),
	md()
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
	{
		input: './app/node_modules/www-root/index.js',
		output: {
			format: 'esm',
			file: './service/www-root/index.js'
		},
		plugins
	},
]
