import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths' //この行を追加

// https://vitejs.dev/config/
export default defineConfig({
	base: "/", // 追加してみたがデフォルトで指定されているようだ、publicフォルダをルートにしている
	plugins: [
		react(),
		tsconfigPaths() //この行を追加
	],
})
