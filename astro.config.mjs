import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Ellie Docs',
			social: {
				github: 'https://toastielab.dev/EllieBotDevs/EllieBot-docs',
				discord: 'https://discord.gg/etQdZxSyEH',
			},
			sidebar: [
				{
					label: 'Ellie v4',
					autogenerate: { directory: 'v4' },
				},
				{
					label: 'Ellie v5',
					autogenerate: { directory: 'v5' },
				},
				{
					label: 'SupportChild',
					autogenerate: { directory: 'supportchild' },
				},
				{
					label: 'Holana',
					autogenerate: { directory: 'holana' },
				},
			],
		}),
	],
});
