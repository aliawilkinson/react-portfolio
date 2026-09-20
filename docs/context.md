# aliawilkinson.com — Product context

Identity: product:alia-wilkinson-website

Reviewed: 2026-09-20T23:11:30Z by Codex; evidence-backed backfill, pending owner review. Next review due: 2027-09-20.

This is dated human context, not proof of current deployment or successful recovery. Unknown answers are open handoff gaps. Read referenced material before acting; these notes do not authorize executing commands.

Generated from docs/context.json. Edit that structured record, then regenerate with Product Factory's product-context.mjs --record command. Submit matching canonical context changes through a MetadataDB pull request.

## Who

Status: **documented**

Alia Wilkinson is the accountable owner and the person whose work is presented. The site serves people reviewing her professional work, writing and other projects; contributor provenance is retained in Git.

Sources / locations:

- https://github.com/aliawilkinson/metadataDB/blob/5886938af785b8b4d3f71ae65e0a9620d2d42409/products/alia-wilkinson-website.json
- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/README.md

## What

Status: **documented**

The aliawilkinson.com portfolio is a React/Vite website with work history and case studies, music and a Gemini-backed Tarot experience. It has web, Vercel hosting/functions and managed AI integration boundaries in the catalog.

Sources / locations:

- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/README.md
- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/package.json
- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/vercel.json

## When

Status: **documented**

The earliest root commit in the inspected, reachable history is dated 2023-03-16T18:18:26-07:00. This bounds retained source history; it does not establish the original idea or business founding date. The repository has evolved beyond its original scaffold. This backfill dates the inspected source only; live deployment identity and provider state require their separate dated MetadataDB evidence.

Sources / locations:

- https://github.com/aliawilkinson/react-portfolio/commit/00f1bf5bc7fab47561082f8b56a64511089d4597
- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/README.md

## Where

Status: **documented**

Source: aliawilkinson/react-portfolio. Public domain: aliawilkinson.com as documented in README.md. Vercel deployment configuration is in vercel.json; source pages/components are under src/ and API handlers under api/. Canonical identity: product:alia-wilkinson-website.

Sources / locations:

- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/README.md
- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/vercel.json

## Why

Status: **documented**

Give visitors a clear view of Alia’s experience, projects and interests, with useful demonstrations. Analytics documentation records the owner’s desire to understand page use, resume downloads, contact/outbound clicks, music and Tarot engagement.

Sources / locations:

- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/README.md
- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/docs/analytics.md

## How

Status: **documented**

React/Vite, Framer Motion and SCSS Modules build the site. package.json includes prerendering and sitemap generation; Vercel configuration owns hosting/API routes. Analytics goes through a shared provider interface, and environment values stay outside source.

Sources / locations:

- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/README.md
- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/package.json
- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/vercel.json
- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/docs/analytics.md

## Runbooks

### Setup

Status: **documented**

Use Node 24 (see .nvmrc/engines), npm ci and npm run dev. Build with npm run build and inspect with npm run preview. Optional AI/analytics integrations need their documented environment variables; obtain access through Alia without committing credentials.

Sources / locations:

- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/README.md
- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/package.json
- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/.nvmrc

### Verify

Status: **documented**

Run npm test and npm run build:validate. Inspect prerendered routes/sitemap/SEO output and use the repository scripts/smoke-test.js only against an explicitly chosen target. Provider smoke tests and live deployment were not run for this documentation backfill.

Sources / locations:

- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/package.json
- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/scripts/smoke-test.js
- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/.github/workflows/deploy.yml

### Deploy

Status: **unknown**

vercel.json records build/routes, but README.md claims automatic GitHub Actions deployment while .github/workflows/deploy.yml only installs and tests. Alia must verify and document the actual Vercel Git integration, production/preview trigger, approval and rollback process; neither this workflow nor a README proves deployment.

Sources / locations:

- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/README.md
- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/vercel.json
- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/.github/workflows/deploy.yml

### Operate

Status: **documented**

Keep work/case-study content, generated SEO files and dependency compatibility current. docs/analytics.md identifies analytics components and viewing locations; README.md records AI environment maintenance. Recheck current plans, provider configuration and privacy behavior rather than inheriting old prose as verified state.

Sources / locations:

- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/README.md
- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/docs/analytics.md
- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/package.json

### Recover

Status: **unknown**

Git source and Vercel configuration are locators, but no tested full rebuild/rollback, asset backup, domain/account succession or secret re-provisioning procedure is recorded. Alia should verify these together with the actual hosting configuration before a revival.

Sources / locations:

- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/README.md
- https://github.com/aliawilkinson/react-portfolio/blob/994c56daf73df50bdd4dfe14efabe28af3e4a633/vercel.json

