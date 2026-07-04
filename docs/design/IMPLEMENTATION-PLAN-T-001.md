# Implementation Plan: T-001 (single slice)

## Linked Spec
docs/specs/SPEC-T-001.md

## Slice 1 (only slice for T-001)
**Purpose:** prove the real input → store → retrieve → display loop
before any real data, auth, or hosted persistence exists in this repo.

**Files expected to change/create:**
- Next.js scaffold (package.json, lockfile, config) IF not already
  present — this is first product code in this repo.
- `app/page.tsx`
- `app/actions.ts`
- `lib/day-log.ts`
- `data/.gitkeep` + `.gitignore` entry for `data/day-log.json`
- `.github/workflows/ci.yml` — ADD a real build/lint job (governance
  structure-check job stays as-is). This is a CI Integrity Note case:
  the verification surface is being STRENGTHENED (first real build check
  added, nothing weakened or removed).

**Tests required:** none automated for T-001 — the manual verification
steps in SPEC-T-001.md are the acceptance test at this size. CI runs
install + lint + build only.

**Rollback impact:** revert the T-001 implementation commit `abcbddd` in full; do not use a manual file-by-file deletion list because the change set includes scaffold, config, CI, app, and data artifacts.

**Dependency order:** n/a, single slice.

**Founder-checkable output:** the running page (dev server locally, or a
preview URL) — the reload test is the founder's own verification step.
