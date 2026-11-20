# Cross Punt

Cross Punt is a lightweight editorial website built with Next.js and Keystatic. The project follows the default technical framework from the repository template and includes a homepage, article overview, article detail pages, an About page, and a Keystatic editor at `/keystatic`.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in the browser.

## Editing articles with GitHub

Open http://127.0.0.1:3000/keystatic while the development server is running.
On first use, select **Create GitHub App** and install the app with access to
`thor15062005/cross-punt-news`. Keystatic writes its app settings to the ignored
`.env` file. Editors sign in with a GitHub account that has write access to the
repository.

Keystatic saves article edits to `content/articles` on the selected GitHub
branch. The public site reads the files from its checkout. Pull changes to see
them locally and deploy the branch that contains the published changes.

For a deployed editor, use a Node.js host and set the four variables from
`.env.example` in the hosting environment before building and deploying. Add
`https://<site-host>/api/keystatic/github/oauth/callback` to the GitHub App's
callback URLs. Keep the app credentials in the environment.

See the [Keystatic GitHub setup guide](https://keystatic.com/docs/github-mode).
