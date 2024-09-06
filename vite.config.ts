import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { ViteToml } from 'vite-plugin-toml'
import PurgeIcons from 'vite-plugin-purge-icons'
import { FontaineTransform } from "fontaine";

export default defineConfig({
	plugins: [ ViteToml() , sveltekit(), PurgeIcons(), FontaineTransform.vite({ fallbacks: ["Arial", "Roboto"] }) ]
});
