// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import pkg from './package.json' ;
import sidebar from "./sidebar.js"

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: `EasyTest`,
			editLink: {
				baseUrl: 'https://github.com/olton/easytest-doc/edit/master/',
			},
			logo: {
				light: '/src/assets/exam-black.svg',
				dark: '/src/assets/exam-white.svg',
			},
			favicon: '/exam-white.svg',
			social: {
				github: 'https://github.com/olton/easytest',
				discord: 'https://discord.gg/jpUJk8zc',
			},
			sidebar,
			plugins: [starlightThemeRapide()],
			customCss: [
				'./src/styles/index.css',
			],
			components: {
				Footer: './src/components/Footer.astro',
				SocialIcons: './src/components/SocialIcons.astro',
			},
			lastUpdated: true,
			expressiveCode: {
				themes: ['dark-plus', 'github-light']
			},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 4,
			},
			credits: false,
		}),
	],
});
