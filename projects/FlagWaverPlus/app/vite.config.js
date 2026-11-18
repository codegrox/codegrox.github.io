import { defineConfig } from 'vite';

// Builds into the parent folder (projects/FlagWaverPlus/) so GitHub Pages serves the app
// at /projects/FlagWaverPlus/ straight from the repo, no Actions needed.
// Fixed output names (no hashes) so a rebuild overwrites instead of piling up stale files.
export default defineConfig({
    base: './',
    build: {
        outDir: '..',
        emptyOutDir: false,
        target: 'es2019',
        sourcemap: false,
        rollupOptions: {
            output: {
                entryFileNames: 'assets/app.js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name][extname]'
            }
        }
    }
});
