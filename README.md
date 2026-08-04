# Ardit Xhuveli — CV

A minimal single-page CV. Plain HTML, CSS, and a few lines of JavaScript — no build step.

```
index.html    content & structure
styles.css    styling (light + dark + print)
script.js     theme toggle
```

## Preview locally

Just open `index.html` in a browser. (Fonts load from Google Fonts, so you'll
need to be online to see IBM Plex — it falls back to system fonts offline.)

## Deploy to GitHub Pages

This repo is already committed on `main`. It deploys as a **user site** —
repo name `xhuve.github.io`, served at the root URL.

1. Create the repo and push. With the GitHub CLI (already authenticated):

   ```sh
   gh repo create xhuve.github.io --public --source=. --remote=origin --push
   ```

   Or, if you create `xhuve.github.io` on github.com by hand, just wire up the
   remote and push:

   ```sh
   git remote add origin https://github.com/xhuve/xhuve.github.io.git
   git push -u origin main
   ```

2. GitHub serves a `username.github.io` repo automatically from `main`. Give it
   about a minute, then open **https://xhuve.github.io/**. If it isn't live yet,
   go to **Settings → Pages** and set **Source** to *Deploy from a branch* →
   **main** / **(root)**.

## Save as PDF

Open the page and print (`Ctrl/Cmd + P`) → *Save as PDF*. The print stylesheet
hides the theme toggle and switches to clean black-on-white for a tidy résumé.

## Editing

All content lives in `index.html`. Colors and type are CSS custom properties at
the top of `styles.css` — change `--accent` to re-skin the whole page.
