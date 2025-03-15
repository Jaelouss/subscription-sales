import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import viteCompression from 'vite-plugin-compression';
import eslint from 'vite-plugin-eslint';
import postcssMediaQueries from 'postcss-sort-media-queries';

export default defineConfig({
	root: 'src',
	build: {
		outDir: '../dist',
		emptyOutDir: true,
		rollupOptions: {
			input: glob.sync('./src/*.html'),
			output: {
				entryFileNames: '[name].js',
				assetFileNames: '[name][extname]',
			},
		},
		sourcemap: true,
	},
	define: {
		global: 'window',
	},
	css: {
		devSourcemap: true,
		preprocessorOptions: {
			scss: {
				additionalData: `
          @use "/scss/variables.scss";
          @use "/scss/utils.scss";
          @use "/scss/helpers/functions.scss";
          @use "/scss/helpers/media.scss";
          @use "/scss/helpers/mixins.scss";
        `,
			},
		},
		postcss: {
			plugins: [postcssMediaQueries()],
		},
	},
	plugins: [
		injectHTML(),
		FullReload(['./src/**/**.html']),
		viteCompression({
			algorithm: 'gzip',
			ext: '.gz',
		}),
		eslint({
			fix: true,
			include: ['src/**/*.{js,ts}'],
			exclude: ['node_modules', 'dist'],
			failOnError: false,
			lintOnStart: false,
		}),
	],
	server: {
		open: true,
		host: '0.0.0.0',
		port: 3000,
	},
});
