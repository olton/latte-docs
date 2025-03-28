// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import sidebar from "./sidebar.js"
import version from "./version.js";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: `Latte v${version}`,
			editLink: {
				baseUrl: 'https://github.com/olton/latte-docs/edit/master/',
			},
			logo: {
				light: '/src/assets/favicon-black.svg',
				dark: '/src/assets/favicon-white.svg',
			},
			favicon: '/favicon.svg',
			social: {
				github: 'https://github.com/olton/latte',
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
				Head: './src/components/Head.astro',
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
