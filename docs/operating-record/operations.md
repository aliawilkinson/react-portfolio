# Alia Wilkinson portfolio operations

Product: `product:alia-wilkinson-website`. Inspected source: `f3da1a3ff3c77d4a91989acfa87b66f95510af45`. Recorded 2026-10-07 UTC (2026-10-06 US Pacific). Author: Codex source-inspection backfill; human review pending.

Authority: **source-defined/intended**, except explicitly linked **historical-receipt** or **verified** results. No live provider observation was made. Source revision applies to every unqualified view below; explicitly unmerged views use their own named revision. Record owner: Product owner; technical updates: Architect/DevOps. Next review date: **unassigned — Product owner must set before the next affected gate**.

## Local setup and verification

The manifest requires Node `24.x` and `.nvmrc` pins the local version. Run `npm ci`, `npm test`, then `npm run build:validate` to build/prerender/generate the sitemap and validate SEO. `npm run dev` serves the Vite UI; do not assume it emulates Vercel serverless functions. Verify Gemini only through an explicitly configured test boundary. `npm run preview` reviews `dist` locally. This backfill checks documentation; it does not call Gemini, publish environment values or visit authenticated consoles.

For meaningful release verification test homepage/projects/blog/about routes, mobile navigation, keyboard use, NomadTime's three clean routes and plain static privacy/support pages, tarot deck/interpretation/session reset, and the intended API failure states. Use `node scripts/smoke-test.js <approved-target>` only after target approval; record timestamp, SHA and results. The manual script is not currently a workflow gate.

## Configuration, secrets and data lifecycle

Hosting input is `vercel.json`; public settings use the committed examples. `GEMINI_API_KEY` is server-only; optional `GEMINI_MODEL`, `GEMINI_FLASH_MODELS` and discovery timestamp choose models. `VERCEL_API_TOKEN`, `VERCEL_PROJECT_ID`, `CRON_SECRET` and `NTFY_TOPIC` support privileged discovery/notifications. Secret values stay in the approved provider or local secret store, never in client `VITE_*` values or this record. `scripts/setup-vercel-env.ps1` performs external writes and needs review of scope before use.

Portfolio content is versioned source. Tarot conversation memory lives in `sessionStorage` with a 24-hour age check on restore and an explicit clear path; storage failure falls back to memory. This is not server-side archival or a cross-device backup. Questions/history cross into Gemini, and provider retention/deletion, user disclosure and allowed inputs require owner review. [Analytics](../analytics.md) documents allowed events and no raw tarot questions in browser events; confirm actual Clarity/analytics settings separately. Log/ntfy error redaction and retention remain gaps. NomadTime pages deliberately avoid analytics/JavaScript embeds; preserve that boundary.

## Release and rollback

1. Choose an exact reviewed commit, run the source/build/route checks on Node 24, and retain `dist` and hashes plus the API source revision.
2. Confirm the actual Vercel project, domain/DNS custody, build settings, preview/production triggers, environment scope and operator access. The GitHub Tests workflow does not deploy. No blanket `vercel --prod` command is prescribed before those bindings are known.
3. Create a reviewed preview through the chosen provider delivery path; test static and API routes separately with synthetic data and bounded provider usage. Compare cron/auth/token permissions and public bundle contents.
4. Use the approved production promotion path; save provider deployment ID/URL, source/artifact/configuration references, route/AI failure-state checks and a MetadataDB receipt review.
5. For rollback, select a verified retained deployment compatible with current server configuration, restore its alias through the confirmed provider procedure, and repeat the same route checks. If no retained deployment is available, rebuild the known-good commit and promote only after preview. Code rollback does not roll back changed Vercel variables or a revoked Gemini key.

## Maintenance, incidents and retirement

Keep static portfolio/support pages available during AI incidents. Check function logs and quota/model configuration without copying question payloads. Missing keys produce a server error; exhausted/overloaded models return failure messages. Notification code existing is not proof that anyone receives it. Establish response owner, backup contact and a tested notification path.

Review runtime/dependency versions, model lifecycle, the weekly discovery definition, domain renewal and external font/carousel/SoundCloud behavior at each relevant change and handoff. Confirm license/provenance of portfolio and tarot assets before reuse. Budget owner, current provider costs/plan, spend controls and renewal dates are unknown here. Before retirement, redirect dependent NomadTime support/privacy URLs, preserve source/assets and required records, revoke provider tokens and disable cron/domain/resource subscriptions with evidence.

[Recovery and full rebuild](recovery.md) · [Checkpoint checklist](checklist.md).
