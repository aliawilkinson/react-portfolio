# Durable context backfill — 2026-09-20

Milestone: preserve enough context for a future maintainer to understand, extend, operate or revive the work.

## Change and authority

Inspected source: `994c56daf73df50bdd4dfe14efabe28af3e4a633`. Existing prose and author decisions are retained. Structured context is an evidence-backed draft for Alia’s review; each unresolved operation is explicitly unknown.

- [product:alia-wilkinson-website](context.md) — edit `docs/context.json`.

MetadataDB holds matching canonical context in [PR #18](https://github.com/aliawilkinson/metadataDB/pull/18). Product Factory [PR #77](https://github.com/aliawilkinson/product-factory/pull/77) defines the schema-compatible renderer and legacy adoption path. Merge the MetadataDB schema support before registration bundles carrying context.

## Verification

- Context schema validated, generated Markdown reproduced exactly, canonical context copies compared, and pinned repository source paths checked.
- New README context links and `git diff --check` passed.
- No runtime behavior or provider configuration changed; application build/deploy/restore checks described in context were not performed for this documentation milestone.
- Corrected README claims that the test-only workflow deploys or automatically smoke-tests production. Actual Vercel triggers/rollback remain an owner-review gap.

## Maintenance and signoff

Regenerate after editing the structured record with:

```sh
node /path/to/product-factory/scripts/product-context.mjs /absolute/repository --record docs/context.json --write
node /path/to/product-factory/scripts/product-context.mjs /absolute/repository --record docs/context.json
```

For Project records, use their relative JSON path. Submit matching canonical context changes through a MetadataDB PR. Do not treat a rendered document as proof of current provider state, publication, backup or successful restore.

Signoff: **ship the documentation for review**. Recovery and other unknown operational prerequisites remain **hold** until the owner supplies and verifies them. This milestone does not approve a runtime release or publishing operation.
