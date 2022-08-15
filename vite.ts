import { UserConfig, Alias } from '../npm/vite'

type Config = UserConfig & {
	alias?: Alias[]
}

export default function conf(name: string, custom: Config = {}) {
	const { alias = [] } = custom
	return Object.assign(<Config>{
		cacheDir: '.git/vite',
		publicDir: 'pub',
		server: { host: name, port: 80 },
		resolve: {
			alias: [
				// baseUrl for bare module specifiers
				{ find: /^([a-zA-Z].*)/, replacement: '/../$1' },
				...alias
			]
		}
	}, custom)
}