import { UserConfig as Config } from '../npm/vite'

export default function conf(name: string, custom: Config) {
	const config = Object.assign(<Config>{
		cacheDir: '.git/vite',
		publicDir: 'pub',
		server: { host: name, port: 80 },
		resolve: {
			alias: [
				{ find: /^([a-z].*)/, replacement: '/../$1' }
			]
		}
	}, custom)
	return config
}