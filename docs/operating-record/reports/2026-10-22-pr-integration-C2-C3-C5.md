# October 22 PR integration review

## Scope and provenance

- Product: `product:alia-wilkinson-website`
- Milestone / checkpoints: review and integrate all seven open PRs; C2, C3 and C5.
- Components / environment: React portfolio and tarot frontend, dependency graph, GitHub test workflow, documentation; local Node 24.21.0 verification.
- Default source before integration: `bd977223e8954d6673fddf274ed2635ecf37872e`.
- Tested integration source: `cfe422715c5dcb92650fe23c8e471471f22dd082`; subsequent edits update the README inventory, manual CI procedure and this report only.
- Author / accountable owner / reviewer: Codex technical review; Alia Wilkinson requested review and merge on October 22, 2026. Automated review remains separate from a human approval.
- Verification date: October 22, 2026 US Pacific. Bounded local checks and one privacy-page readback, with no availability measurement.
- Next checkpoint: release owner observes the merged source on Vercel; calendar date unassigned until merge.

## Reviewed sources

| PR | Scope | Reviewed head |
| --- | --- | --- |
| #81 | Historical NomadTime privacy publication receipt | `87b8ebe31b29d58726bdbb7409a905d960ced227` |
| #82 | follow-redirects 1.16.1 security fix | `685275ec7c912c32260b7d57fc63d655c7070451` |
| #83 | React and React DOM 19.3.1 | `01e5c4a852f6db8245183799cba3fe06e38267f9` |
| #84 | Vitest 5.0.5 and its locked dependencies | `34327f6bac233989fc0e2ca405bca4da8aec2edd` |
| #85 | Sass 1.105.2 and file-watcher dependencies | `37f3bda6844b9d2a0fbe975f01417d8ab2736e93` |
| #86 | Framer Motion 14.3.0 | `9c35826c38d342a6427cd2a2949629efb7d5cde8` |
| #87 | Explicitly requested GitHub tests bound to a reviewed SHA | `28f7fa8f3f15d1c2989571fd28645861a09131ce` |

## Deliverables and checks

Existing [architecture](../architecture.md), [context](../../context.md) and [recovery](../recovery.md) remain applicable. No new service, storage or topology is introduced. The [operations procedure](../operations.md#manual-hosted-verification) and README inventory are reconciled in this integration.

| Requirement / claim | Scope and method | Status | Evidence | Verified at / by |
| --- | --- | --- | --- | --- |
| Combined sources merge cleanly | Local merge of the seven reviewed heads on current main | verified | Integration SHA above; all seven original heads remain ancestors | October 22 / Codex |
| Locked dependencies install on supported runtime | Node 24.21.0, `npm ci --ignore-scripts --no-audit --no-fund`; install hooks skipped, existing browser used | verified | 198 packages installed; manifest and lock remained unchanged | October 22 / Codex |
| Complete local release command | `npm run verify` under Node 24.21.0 | verified | 15 files / 134 tests; zero audit vulnerabilities; production prerender and all 18 SEO routes passed | October 22 / Codex |
| Browser behavior | Built Home, Projects and Tarot routes at widths 1280 and 393; heading visibility, page errors, horizontal overflow, Projects home link and Tarot submit-button bounds | verified | Six route/viewport checks passed | October 22 / Codex |
| Workflow validity and source binding | actionlint 1.7.12 with ShellCheck disabled; actual Bash guard with matching SHA, malformed SHA, moved workflow SHA and checkout drift | verified | Lint passed and all four expected acceptance/rejection outcomes passed | October 22 / Codex |
| Existing PR checks | GitHub check readback on each reviewed head | verified | #81 through #86 have successful Test and Vercel checks; #87 has a successful Vercel preview and intentionally no automatic Test run | October 22 / Codex |
| Review finding on #87 | Re-read current main protection and rulesets | verified | One approval required; no required status checks; no rulesets. Resolved finding's assumed required Test context does not exist | October 22 / Codex |
| Privacy receipt content | HTTPS GET of published policy compared to checked-in file | verified | Both SHA-256 digests equal `fe8f915d27ce676e9a613b37555c65f82072cf5ba4f14d7f878254a47496d5f1` | October 22 / Codex |

## Release and catalog evidence

- Intended target: reviewed integration PR into `main`, then the existing Vercel Git integration. Preserve a merge commit so the seven original PR heads enter main together.
- Current deployed source for this integration: unknown at report creation; preview success on separate PRs does not establish the combined production release.
- Earlier #82 installation/runtime/build holds are resolved for the combined candidate by the successful Node 24 install, audit and full build above. Previous reports and comments remain historical evidence.
- The #87 review concern is resolved against inspected settings, and its future-status-check limitation is retained in the runbook. No repository settings were changed.
- MetadataDB ingestion acknowledgement: unknown; no catalog write is part of this review.

## Gaps and follow-up

| Gap / risk | Impact / gate | Owner | Due date | Resolution evidence |
| --- | --- | --- | --- | --- |
| Main JavaScript retains Vite's large-chunk warning at 637.97 kB / 201.94 kB gzip | Load performance; unchanged chunking strategy | Frontend maintainer | Unassigned | Future measured performance work |
| Live Gemini response and physical iPhone behavior were not exercised | Provider/device behavior beyond scoped dependency verification | Product owner / QA | Next relevant functional change | Separate bounded provider/device test |
| Production rollout not yet observed | C4 | Release owner | After merge | Deployment source and public-route readback |

## Signoff

- Decision: **ship** the reviewed integration through the authorized merge workflow. Local Node 24 verification, existing PR checks and scoped browser checks pass.
- Decision owner/date: Codex technical review, October 22, 2026; Alia's request authorizes reviewing and merging the open PRs. No independent human approval is inferred.
- Remaining conditions: inspect the final PR head and checks before merge, honor any new actionable review finding, and observe the resulting deployment separately. This record does not claim production deployment or close unrelated operating-record gaps.
