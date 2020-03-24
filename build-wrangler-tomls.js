import path from 'path'
import fs from 'fs'
import glob from 'glob'
import mustache from 'mustache'

const view = {
	accountId: process.env.CF_ACCOUNT_ID,
	zoneId: process.env.CF_ZONE_ID,
	workersDev: process.env.CF_WORKERS_DEV === 'true' ? 'true' : 'false',
	kv: {
		accounts: process.env.KV_ID_ACCOUNTS,
		configs: process.env.KV_ID_CONFIGS
	}
}

const templates = glob.sync('service/*/wrangler.template.toml')

for (const template of templates) {
	const dir = path.dirname(template)
	const string = fs.readFileSync(template, { encoding: 'utf8' })
	const toml = mustache.render(string, view)
	fs.writeFileSync(path.join(dir, 'wrangler.toml'), toml, { encoding: 'utf8' })
}
