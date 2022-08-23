const
	web = __dirname,
	name = process.env.NAME,
	prefix = {
		':': 'npm',
		';': 'tsd',
	}

export default <import(':vite').UserConfig>{
	root: web,
	publicDir: `${name}/pub`,
	cacheDir: '.git/run/vite',
	build: {
		rollupOptions: {
			input: `${name}/index.html`
		},
		commonjsOptions: {
			include: [/npm/, /tsd/]
		}
	},
	optimizeDeps: {
		include: ['npm']
	},
	server: {
		port: 80, host: 'web'
	},
	resolve: {
		alias: [
			{
				find: /^([:;]?[a-z].*)/,
				replacement: '$1',
				customResolver: (id) => web + '/' +
					id.replace(/^[:;]/, c => prefix[c] + '/')
			},
		]
	}
}
