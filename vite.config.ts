/// <reference types="node" />
const { NAME, MODE } = process.env

export default <import('npm/vite').UserConfig>{
	build: {
		rollupOptions: {
			input: `${NAME}/index.html`
		}
	},
	cacheDir: '../.f/run/vite',
	clearScreen: false,
	publicDir: `${NAME}/pub`,
	server: { host: NAME, port: 80 },
	resolve: {
		alias: [
			{
				find: /^([#@]?[a-z].*)/,
				replacement: '$1',
				customResolver: (id) =>
					__dirname + '/' + id
						.replace(/^#/, 'npm/')
						.replace(/^@/, 'tsd/')
			},
		]
	}
}