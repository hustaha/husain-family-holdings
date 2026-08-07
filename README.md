# Husain Family Holdings

Family acquisition website for small businesses and multifamily properties via direct seller financing.

## Local development

```bash
npm install
npm run dev
```

## Host on GitHub Pages

1. Push this repo to GitHub (default branch `main`).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow).
4. Site URL will be:

`https://YOUR_USERNAME.github.io/REPO_NAME/`

The deploy workflow sets `VITE_BASE` to `/REPO_NAME/` automatically so assets load correctly.
