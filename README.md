# Alia Wilkinson - Portfolio

Personal portfolio site built with React, Vite, Framer Motion, and SCSS Modules.

**Live site:** [aliawilkinson.com](https://aliawilkinson.com)

## Quick start

```powershell
.\dev.ps1
```

Opens the app at **http://localhost:5173** automatically. Checks your Node version, installs deps if needed, then starts the dev server.

> If you get PowerShell profile errors, run with: `powershell -NoProfile -File dev.ps1`

---

## Tech Stack

| Layer | Package | Version |
|---|---|---|
| UI | React | 19.3.0 |
| Routing | react-router-dom | 7.18.4 |
| Animation | framer-motion | 14.1.0 |
| Styling | SCSS Modules + sass | 1.99.0 |
| Build | Vite | 8.3.4 |
| Icons | react-icons | 4.12.0 |
| Slider | react-slick | 0.31.0 |
| HTML parsing | html-react-parser | 6.1.0 |
| HTTP | axios | 1.20.0 |
| Node (local) | Node.js | 24.15.0 (LTS) |
| Node (Vercel) | Node.js | 24.x |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) v24 (LTS) - install via [nvm](https://github.com/coreybutler/nvm-windows) (Windows) or [nvm-sh](https://github.com/nvm-sh/nvm) (Mac/Linux)
- [Git](https://git-scm.com/downloads)

If you use nvm, the `.nvmrc` file pins the version - just run:

```bash
nvm install   # installs 24.15.0 if not already present
nvm use       # switches to it
```

### Install and run locally

```bash
git clone https://github.com/aliawilkinson/react-portfolio.git
cd react-portfolio
npm ci
npm run dev
```

The app will be available at `http://localhost:5173`.

### Other commands

```bash
npm run build      # production build → output in ./dist
npm run preview    # preview the production build locally
```

---

## Project Structure

```
src/
  components/       # one folder per component, co-located with its SCSS module
  hooks/            # useHeaderShadow, useOutsideAlerter
  utils/
    data.js         # work experience, testimonials, expertise - edit content here
    posts.js        # case study and about page content (HTML strings)
    motion.js       # Framer Motion animation variants
  styles/           # global styles, SCSS constants, utility classes
  App.jsx           # route definitions
  main.jsx          # entry point
public/             # static assets (images, portrait, cert logo)
```

---

## NomadTime project and App Store support

NomadTime appears in **Projects → Apps**. Its public pages are maintained in `public/nomadtime/`:

- `https://aliawilkinson.com/nomadtime` — project overview
- `https://aliawilkinson.com/nomadtime/support` — help and support contact
- `https://aliawilkinson.com/nomadtime/privacy` — iPhone/iPad privacy policy

These are standalone HTML pages, with local images and CSS and no JavaScript, analytics, or portfolio embeds. Keep the clean routes in `vercel.json` and `vite.config.js` aligned. The build copies these pages without prerendering; sitemap and SEO validation include all three. App behavior and privacy facts come from the NomadTime repository, while this repository owns the published pages. Update both the app's About links and its App Store metadata if these URLs ever change. Do not display a download badge until the public App Store release is available.

## Deployment (Vercel)

Use Node 24 and npm 11.19.1 with the committed `package-lock.json`. npm is the
single package manager for local, CI and Vercel installs; do not regenerate a
Yarn lockfile. Run `npm ci` followed by `npm run verify` before a release. This
runs the full tests, dependency audit, production prerender and SEO validation.

The Vercel CLI is not an application dependency. The application uses
`@vercel/analytics` and HTTPS API calls; its build uses Vite. Those integrations
remain intact. The hosting service supplies its own deployment tooling. If a
future delivery procedure needs a local CLI, select and verify its version in
that procedure rather than adding an unused CLI to the site's dependency graph.

The checked-in `.github/workflows/deploy.yml` currently runs unit tests only. `vercel.json` declares the hosting build and routes, but the actual Vercel Git integration, production/preview triggers and rollback procedure still need an owner review. See [deployment context](docs/context.md) before relying on automatic delivery.

Vercel is configured via `vercel.json` to use Vite as the framework and `dist` as the output directory. **Node version is set in the Vercel dashboard** under Project Settings → General → Node.js Version → select **24.x**.

### Historical deployment setup (verify before reuse)

Earlier deployment guidance listed these GitHub Actions settings. The current workflow does not consume them; establish the chosen Vercel integration before configuring automation:

| Secret | Where to find it |
|---|---|
| `VERCEL_TOKEN` | vercel.com → Settings → Tokens → Create |
| `VERCEL_ORG_ID` | Confirm the existing Vercel team/project binding with the deployment owner |
| `VERCEL_PROJECT_ID` | Confirm the existing Vercel project binding with the deployment owner |

Add `.vercel/` to `.gitignore` - don't commit those IDs.

### Syncing environment variables

The site uses a Gemini API key for the Tarot conversation feature. Environment variables are managed via a sync script.

The existing REST sync script reads a machine-local `.vercel/repo.json`. To
bootstrap a fresh checkout without downloading a CLI, confirm the existing
project and owning team in Vercel's project/team settings, then create this
ignored file with those IDs and the project name:

```json
{
  "projects": [
    {
      "id": "prj_REPLACE_WITH_EXISTING_PROJECT_ID",
      "orgId": "team_REPLACE_WITH_EXISTING_TEAM_ID",
      "name": "REPLACE_WITH_EXISTING_PROJECT_NAME"
    }
  ]
}
```

Keep exactly the intended project in this array: the existing script uses its
first entry. Keep the binding, `.env.local` and `.env.deploy` out of Git. Creating
the binding is local setup only; the following sync command writes the selected
project's environment variables and should run only as an approved operation.

```powershell
# Sync .env.local to Vercel
.\scripts\setup-vercel-env.ps1
```

This script:
- Reads vars from `.env.local`
- Creates/updates them in Vercel via API
- Handles sensitive vars (API keys) securely - they show as masked in the Vercel dashboard

### Rotating the Gemini API key

Google AI Studio doesn't support programmatic key rotation, so this is a manual process. Do this quarterly or if the key is compromised.

**Step 1: Generate a new key**
1. Go to [Google AI Studio API Keys](https://aistudio.google.com/app/apikey)
2. Click "Create API key"
3. Copy the new key (you won't see it again)

**Step 2: Update locally**
```powershell
# Edit .env.local and replace GEMINI_API_KEY value
notepad .env.local
```

**Step 3: Push to Vercel**
```powershell
.\scripts\setup-vercel-env.ps1
```

**Step 4: Verify it works**
1. Visit [aliawilkinson.com/tarot](https://aliawilkinson.com/tarot)
2. Draw cards and ask a question
3. Confirm you get an AI interpretation (not an error)

**Step 5: Delete the old key**
1. Go back to [Google AI Studio API Keys](https://aistudio.google.com/app/apikey)
2. Find the old key and delete it

> **Note:** Vercel sensitive vars show as masked (dots) in the dashboard - this is expected. You can't view the value after setting it.

---

## External CDN links (referenced in index.html)

- **Font:** [Eudoxus Sans](https://stijndv.com/fonts/Eudoxus-Sans.css)
- **Slick carousel CSS:**
  - `https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css`
  - `https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css`

---

## Testing

### Unit tests

```bash
npm test          # run once
npm run test:watch  # watch mode
```

### Post-deploy smoke tests

The repository includes a manual smoke-test script to check a chosen target:
- Homepage loads and renders
- All main routes are accessible (/, /tarot, /case-studies, etc.)
- No console errors on page load
- Tarot page loads the deck UI

The checked-in GitHub Actions workflow does not run these automatically. After confirming the intended target, invoke the script explicitly:

```bash
node scripts/smoke-test.js https://aliawilkinson.com
```

---

## What changed in the 2026 refactor

See [CHANGELOG.md](./CHANGELOG.md) for the full list. Summary:

- Header/Footer lifted to `App.jsx` - no longer duplicated per route
- Mobile menu toggle changed from `div` to accessible `button` with `aria-label`
- All images have descriptive `alt` attributes
- Progress bar dots in Experience now driven by data instead of hardcoded
- Dead imports, dead exports, and unused packages removed
- Inline styles moved to SCSS modules
- `@import` → `@use` across all SCSS files (Dart Sass 3.0 compatibility)
- Dependencies updated to latest stable versions within current major versions
- Node pinned to 24 LTS across local (`.nvmrc`), CI (GitHub Actions), and Vercel (`vercel.json`)

## Durable project context

Start with [who, what, when, where, why and how](docs/context.md), including setup, verification, release, operations and recovery. The dated record cites source evidence and marks unanswered questions explicitly.

## Architecture and operations record

Start at the [operating checklist](docs/operating-record/checklist.md) for architecture diagrams, deployable Components, operating/recovery procedures and evidence gaps. Update the record at creation, design, implementation, pre-release, post-release and maintenance/handoff checkpoints. [Backfill report](docs/operating-record/reports/2026-10-07-operating-record-backfill.md) distinguishes source, unmerged work, historical receipts and fresh verification.
