# Simple Workflow with Vite

A minimal front-end build setup for teaching vanilla JavaScript.

## Install

- `nvm use` (Node 24)
- `npm i`

## Features

- Serves `src/*.html` with a dev server and hot reload.
- Any `.html` file under `src/` is a page automatically (e.g. `src/about.html`,
  `src/blog/post.html`) — no list to maintain.
- Compiles SASS referenced from HTML (`<link rel="stylesheet" href="/styles/app.scss">`).
- Bundles ES modules referenced from HTML (`<script type="module" src="/scripts/app.js">`).
- Copies everything in `src/public/` to `dist/` untouched (images, fonts, ...).
- Source maps in dev and in the production build.

## Commands

- `npm run dev` : start the dev server with hot reload.
- `npm run build` : build the site into `dist/`.
- `npm run preview` : serve the built `dist/` folder to check the production build.

## Warning

Not intended to be used in production.
For school project purpose only.
