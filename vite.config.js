import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  build: {
    outDir: 'build',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'esbuild',
  },
}
