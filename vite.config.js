import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

// 讀取 `.env` 檔案
dotenv.config();

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],

	define: {
        'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(process.env.VITE_GEMINI_API_KEY)
    }
});
