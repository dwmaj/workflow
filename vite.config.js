import { resolve } from 'node:path';
import { globSync } from 'tinyglobby';
import { defineConfig } from 'vite';

/*
 | Multi-page build without a manual list: every .html file under src/
 | becomes a page. Add src/about.html or src/blog/post.html and it is
 | picked up on the next build, keeping its folder structure in dist/.
 */
const input = Object.fromEntries(
  globSync('src/**/*.html').map((file) => [
    file.replace(/^src\//, '').replace(/\.html$/, ''),
    resolve(import.meta.dirname, file),
  ])
);

export default defineConfig({
  root: 'src',
  publicDir: 'public',
  // Relative asset URLs so dist/ works from any subfolder (FTP upload).
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: { input },
  },
});
