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

1. Create a repository and push these files to it:

   ```sh
   git init
   git add .
   git commit -m "Add CV site"
   git branch -M main
   git remote add origin https://github.com/xhuve/<repo-name>.git
   git push -u origin main
   ```

2. On GitHub: **Settings → Pages**. Under **Build and deployment**, set
   **Source** to *Deploy from a branch*, pick **main** and the **/ (root)**
   folder, then **Save**.

3. Wait a minute, then your site is live at
   `https://xhuve.github.io/<repo-name>/`.

## Save as PDF

Open the page and print (`Ctrl/Cmd + P`) → *Save as PDF*. The print stylesheet
hides the theme toggle and switches to clean black-on-white for a tidy résumé.

## Editing

All content lives in `index.html`. Colors and type are CSS custom properties at
the top of `styles.css` — change `--accent` to re-skin the whole page.
