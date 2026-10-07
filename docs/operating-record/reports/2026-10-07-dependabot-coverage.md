# Dependabot coverage milestone — 2026-10-07

Repository: `aliawilkinson/react-portfolio`. Inspected revision before this change: `0f9801e01d5b3cf7e5dbdc352997962407c3ed12`. Author: Codex. Checkpoints: C2 source/configuration, C5 maintenance. Human PR review pending.

## Manifest and workflow audit

Audited all tracked files with `git ls-files` and hidden-aware discovery (`rg --files --hidden`), including manifests, independent locks/workspaces, Dockerfiles and `.github/workflows`. Generated output, installed dependencies and ignored machine-local files are not new dependency roots.

| Ecosystem | Update directory | Evidence | Boundary |
| --- | --- | --- | --- |
| npm | / | package.json; package-lock.json; yarn.lock | One manifest/root with npm and Yarn locks; npm ecosystem covers both. CI uses npm ci. No redundant Yarn entry. |
| github-actions | / | .github/workflows/deploy.yml | Tests workflow actions; root directory. |

## Decision and preserved policies

Added `.github/dependabot.yml` with weekly npm and Actions jobs. Keep React dependencies and Vite/test tooling grouped for compatibility review. The existing `yarn.lock` shares the root `package.json`; npm is the Dependabot ecosystem for npm/Yarn, so there is no separate or overlapping Yarn job. CI's locked installer remains `npm ci`; choosing or removing the secondary lockfile is outside this change. No nested manifest, Python/uv dependency root or Dockerfile is tracked.

No dependency upgrade, lockfile regeneration, automerge, runtime-provider action or original working-copy edit was performed. Every bot PR still requires the repository's normal checks and review. New manifests, lock roots, Dockerfiles or workflow ecosystems must update this inventory and coverage in the same PR; generated workspaces should be covered once at their owning lock root.

Configuration semantics follow the [GitHub Dependabot options reference](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference): weekly jobs use the correct package ecosystem and manifest directory; GitHub Actions uses `/`. This is configuration/source evidence, not proof of a successful hosted update run.

## Hosted security-update setting

The portfolio workflow verified GitHub vulnerability alerts enabled (HTTP 204) and automated security-fix PRs `enabled: true`, `paused: false` at `2026-10-07T03:34:03.957318+00:00`. The initial security-fix setting was `enabled: false`. Solar Bloom's settings were already enabled; the workflow enabled the missing settings elsewhere. No automerge or branch-protection setting was changed.

The [portfolio dependency-maintenance report](https://github.com/aliawilkinson/metadataDB/blob/codex/operating-record-backfill/docs/dependabot-coverage-2026-10-07.md) owns the cross-repository setting evidence. Hosted settings are separate from the weekly YAML schedule; new configs still need to reach the default branch before scheduled version updates run.

## Verification and Signoff

- YAML parsed with js-yaml; duplicate keys rejected. Semantic checks passed: version 2, weekly schedules, unique ecosystem/directory entries, real manifests/workflows, workspace/lock ownership, valid grouping, no uncovered external manifest root and no empty/duplicate jobs.
- All tracked dependency manifest names, Dockerfiles and hidden workflow files were inspected; no Docker or uv root found.
- Configuration/docs only; no application test rerun was needed. Both root lockfiles are preserved unchanged.
- Scoped Markdown links and `git diff --check`: passed. No dependency resolution changes.

Signoff: **ship** this coverage/configuration milestone for PR review. A successful scheduled update run remains **unverified** here. Newly added configuration requires default-branch merge; existing Solar Bloom/Witchy schedules are preserved. Owner: repository maintainer; next check: the next scheduled run after the applicable merge, no calendar date assigned. Existing application/recovery/release gates remain separate. No release approval or test result is inferred from a YAML file.
