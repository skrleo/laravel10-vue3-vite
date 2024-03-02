import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import path from 'path';

export default defineConfig({
	server: {
		hmr: {
			host: 'localhost',
		},
	},
	plugins: [
		vue(),
        Pages(),
        Layouts(),
        UnoCSS(),
		AutoImport({
			imports: ['vue'],
		}),
		Components({
			resolvers: [NaiveUiResolver()],
		}),
		laravel({
			input: ['resources/css/app.css', 'resources/js/app.js'],
			refresh: true,
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'resources/js/src'),
		},
	},
});

