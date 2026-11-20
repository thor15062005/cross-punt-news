# Cross Punt

Cross Punt is a lightweight editorial website built with Next.js and Keystatic. The project follows the default technical framework from the repository template and includes a homepage, article overview, article detail pages, an About page, and a Keystatic editor at `/keystatic`.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in the browser.

## Editing articles

Open http://localhost:3000/keystatic while the development server is running.
The editor saves articles to `content/articles`. The home page, article
overview, and article detail pages read from those files. Commit the article
changes and redeploy to publish them.

The editor uses local storage and is available during development. Editing on
a deployed site requires a separate GitHub storage configuration.
