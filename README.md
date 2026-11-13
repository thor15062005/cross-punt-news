# Cross Punt

Cross Punt is a lightweight editorial website built with Next.js and Keystatic. The project follows the default technical framework from the repository template and includes a homepage, article overview, article detail pages, an About page, and a Keystatic editor at `/keystatic`.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in the browser.

## Required environment variables

The project includes a `.env.example` file for the deployed GitHub-authenticated Keystatic setup:

- `KEYSTATIC_GITHUB_CLIENT_ID`
- `KEYSTATIC_GITHUB_CLIENT_SECRET`
- `KEYSTATIC_SECRET`
- `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`

Keep these values in a local `.env` file only on the deployment platform or in a secure environment. Do not commit secrets.
