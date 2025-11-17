# Argyle & Ditmas

React + TypeScript + Vite project powering the Argyle & Ditmas site.

## Requirements

- Node.js **20.19.0+** (LTS) or **22.12.0+**. These are the first Node releases that include the `crypto.hash` API Vite 7 uses internally. Older versions (for example Node 20.5.0) crash during `npm run dev`.
- npm 10+ (ships with the Node installers above).

> A `.nvmrc` file is committed, so `nvm use` automatically switches to the supported Node release.

## Getting started

```bash
nvm use              # switches to 20.19.0 (or tells you to install it)
npm install
npm run dev          # starts Vite on http://localhost:5173
```

If `nvm use` reports that Node 20.19.0 is missing, run `nvm install` once and rerun `nvm use`.

## Available scripts

- `npm run dev` – Start the Vite dev server
- `npm run build` – Type-check and build to `dist/`
- `npm run preview` – Preview the production build locally
- `npm run storybook` – Launch Storybook on port 6006
- `npm run build-storybook` – Build the static Storybook bundle
- `npm run lint` – Run ESLint

## Troubleshooting

**Node version error / `crypto.hash is not a function`**

1. Check the runtime with `node -v`. It must report `v20.19.0` (or higher in the 20.x line) or `v22.12.0+`.
2. Run `nvm use` (or `nvm install && nvm use`) in the project root to switch Node versions.
3. If you are not using `nvm`, install the latest Node 20 LTS from [nodejs.org](https://nodejs.org/) and restart your shell before running `npm run dev` again.

Once the runtime matches those versions, `npm run dev` and Storybook will boot without the `crypto.hash` error.
