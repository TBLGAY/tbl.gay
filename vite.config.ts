import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { ViteToml } from 'vite-plugin-toml'
import PurgeIcons from 'vite-plugin-purge-icons'

export default defineConfig({
	plugins: [ ViteToml() , sveltekit(), PurgeIcons() ]
});
