# Portfolio security dependency remediation — C2/C5

- Product: `product:alia-wilkinson-website`; owner: Alia; implementation/verification: Codex.
- Base: `6e6e857462ed29b45a884aee029e7dd257a1e07f`.
- Tested dependency/application candidate: commit `ec0ca78ba36e374bf1617fe69525c47806824f51`, tree `e81a72d7b6f25d74b2b16ef0185969cdde5148f2`; later review corrections only document explicit binding bootstrap and change the missing-binding diagnostic, with no application/dependency changes.
- Verified: October 13 PDT / October 14 UTC, 2026, isolated checkout, Node 24.21.0 / npm 11.19.1.
- Scope: application dependency graph and deterministic local verification. No deployment or provider/settings change.

## Change and compatibility

Removed the unused `vercel` CLI dependency. Source inspection found no imports
or checked-in build/release command using that package. Vercel's configured
install/build remain `npm ci` / `npm run build`; `@vercel/analytics`, the HTTPS API
handlers and hosting configuration remain unchanged. Historical optional CLI
setup instructions do not make a CLI necessary for every application install.
If a future local release needs the CLI, explicitly choose and verify its
version as deployment tooling in that release procedure.

Codex review identified that the environment-sync helper's old missing-binding
message still prescribed an unpinned CLI download. The README now documents
creating the ignored single-project binding directly from the existing project
and team settings, matching the helper's current `projects[0].id/orgId/name`
contract. Its diagnostic points to that procedure; analytics setup also uses
the existing dashboard/release procedure. No API mutation logic changed.
PowerShell is unavailable here, so this bootstrap/diagnostic change received
source/schema inspection, not a claim of executing a provider sync.

npm is now the declared package manager, matching the existing CI and hosting
commands. Removed the duplicate Yarn lockfile; it is no longer a supported
installation input. Historical revisions retain the prior Yarn graph.

Updated only the remaining vulnerable transitive package, Immutable 5.1.5 →
5.1.9, within Sass's declared compatible range. All retained package versions
other than Immutable are unchanged; no package was added. Removing the CLI
pruned 354 package records. Remaining same-version lock changes are package
classification/formatting from npm. The new `verify` command composes the
existing tests/build/SEO checks with a security audit; it does not trigger a
deployment or add a scheduled hosted runner.

## Verification

| Check | Result |
| --- | --- |
| Clean `npm ci --no-audit --no-fund` on Node 24 | Passed; no forced or legacy peer resolution |
| `npm ls --all` | Passed complete installed peer graph |
| `npm test` | 134 tests in 15 files passed |
| `npm run build:validate` | Vite build, 15 Chromium prerenders, 18 SEO routes and sitemap passed |
| Fresh exact-base and candidate `npm audit --json` | 37 affected package entries → **0**; critical 1 → 0, high 28 → 0, moderate 7 → 0, low 1 → 0 |
| Package provenance | Immutable remains MIT from the same upstream/npm registry with SHA-512 integrity; installed package has no lifecycle scripts; no added package |
| New advisories/affected packages | None; no ignore, suppression or exception |

The [machine-readable comparison](2026-10-13-security-audit-comparison.json)
retains both counts and affected-package lists. npm counts are dependency-graph
entries, not GitHub alert counts or a production exploitability assessment.
The duplicate lockfile removal alone is not counted as an npm security fix.

The initial prerender attempt was blocked by the local sandbox's listening-port
restriction; the approved local-server run passed. Existing >500 kB bundle
warning remains. npm reported pre-existing install scripts for Puppeteer and
platform watchers; Puppeteer download was omitted and installed Chrome was used
for actual prerendering. No package-script permission was expanded.

Upstream review: [Immutable 5.1.9 release](https://github.com/immutable-js/immutable-js/releases/tag/v5.1.9)
and [5.1.8 security release](https://github.com/immutable-js/immutable-js/releases/tag/v5.1.8).

## Signoff and remaining gates

**Ship local source for PR review; hold merge until normal hosted checks and
review requirements are satisfied.** Hosted results, final merge SHA and
post-merge status belong in the PR/tracker receipt. This report does not certify
a deployed application or imply the live alert index has already refreshed.
Production delivery still follows the existing explicit release requirements.
Unrelated application/provider/recovery gaps remain in the operating checklist.
