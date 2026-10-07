# Alia Wilkinson portfolio recovery

Product: `product:alia-wilkinson-website`. Inspected source: `f3da1a3ff3c77d4a91989acfa87b66f95510af45`. Recorded 2026-10-07 UTC (2026-10-06 US Pacific). Author: Codex source-inspection backfill; human review pending.

Authority: **source-defined/intended**, except explicitly linked **historical-receipt** or **verified** results. No live provider observation was made. Source revision applies to every unqualified view below; explicitly unmerged views use their own named revision. Record owner: Product owner; technical updates: Architect/DevOps. Next review date: **unassigned — Product owner must set before the next affected gate**.

| Failure | Impact | Recovery dependency |
| --- | --- | --- |
| Static hosting or bad bundle | Public portfolio and support unavailable | Known-good `dist`/source, Vercel access, domain mapping |
| Gemini key/model/quota failure | AI conversation unavailable; static/written content can remain | Provider project/key access and validated model configuration |
| Cron/configuration error | Discovery or future model selection disrupted | Recorded prior non-secret config, token custody and approved environment edit |
| Browser storage/device loss | Tarot conversation lost | No server backup or restore/export contract exists |
| Domain/provider account loss | Site unreachable despite available code | Registrar/DNS, Vercel and Google recovery contacts |

Formal availability target and measured uptime are **unknown**. No app-level multi-provider HA is implemented. Static delivery and serverless hosting alone do not establish an uptime guarantee. Source RPO is the last pushed reviewed commit; browser conversation recovery is not promised and can lose the whole session. Production RTO/RPO, retained deployment window and an independent configuration backup are not approved or tested.

## Full rebuild — documented, not executed

1. Recover GitHub and pin the last known-good receipt/source; preserve source and licensed static assets. Recover Vercel, DNS/registrar, Google AI and notification access through named custodians. Their recovery/contact bindings must be completed first.
2. Use Node 24 and locked dependencies to run tests and `build:validate`; inspect prerendered clean routes and static NomadTime pages locally. Do not substitute `dist` alone for serverless API source.
3. Restore the selected project's build/routing/server settings and approved server secret references. Rebind/rotate lost keys deliberately; confirm that secrets are absent from the browser bundle. Restore safe model configuration before enabling discovery writes.
4. Deploy to a reviewed preview. Test homepage, case studies, support/privacy, tarot written path, request validation, AI error handling and session clear behavior. A provider probe requires a separately approved bounded request.
5. Restore the production domain only after checks and ownership review. Confirm TLS/routing, notifications and the chosen cron/auth policy; retain the provider result and new receipt.
6. Record elapsed recovery time and any lost session/configuration data. A receiving maintainer repeats the procedure independently before closing C5.

Do not claim recovered tarot history after session/device loss. Latest successful production rollback or full rebuild drill: **unknown**. The historical deployment receipt establishes a past release, not successful disaster recovery.

## Drill evidence to retain

For each authorized rehearsal record the exact source/artifact/configuration, environment and dataset scope, source backup/retention locator, recovery point, start/end time, measured interruption/data loss, acceptance checks, failed steps and reviewer. Keep secrets and user data out. Latest full recovery evidence: **unknown**; owner: DevOps/QA (local research: QA); affected gate: C3/C5; due date: **unassigned, must be agreed before the gate**.

[Operating procedures](operations.md) · [Checkpoint checklist](checklist.md).
