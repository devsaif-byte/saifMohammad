import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => ({
  base: '/',
  build: {
    outDir: 'build',
  },
  plugins: [react(), viteTsconfigPaths()],
}))
