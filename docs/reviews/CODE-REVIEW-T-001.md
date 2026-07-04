# Code Review: T-001
Reviewer session: Codex Reviewer
Commit: abcbddd (implementation under review); fcf811e adds the reviewer prompt after the implementation commit
Spec: docs/specs/SPEC-T-001.md
Design: docs/design/IMPLEMENTATION-PLAN-T-001.md
Tier: 2

## Scope exact to slice? (yes/no + proof)

Yes for T-001 product implementation, with one history caveat.

The approved slice allows first Next.js scaffold/config files if absent, `app/page.tsx`, `app/actions.ts`, `lib/day-log.ts`, `data/.gitkeep`, the `.gitignore` entry for `data/day-log.json`, and `.github/workflows/ci.yml` for the first product build/lint job: docs/design/IMPLEMENTATION-PLAN-T-001.md:10, docs/design/IMPLEMENTATION-PLAN-T-001.md:13, docs/design/IMPLEMENTATION-PLAN-T-001.md:14, docs/design/IMPLEMENTATION-PLAN-T-001.md:15, docs/design/IMPLEMENTATION-PLAN-T-001.md:16, docs/design/IMPLEMENTATION-PLAN-T-001.md:17.

The implementer's changed-file list includes exactly those product files plus Next.js scaffold/config files and required governance artifacts: docs/evidence/T-001-EVIDENCE.md:27, docs/evidence/T-001-EVIDENCE.md:29, docs/evidence/T-001-EVIDENCE.md:44. The listed pre-existing T-001 artifacts are task artifacts, not extra product code: docs/evidence/T-001-EVIDENCE.md:46, docs/evidence/T-001-EVIDENCE.md:52.

History caveat: repository HEAD at review start was fcf811e, one commit after abcbddd, adding `docs/status/CODEX-SESSION-5.md` and changing generated `next-env.d.ts`. I treated abcbddd as the implementation under review because `docs/status/CODEX-SESSION-5.md` is the founder-pasted Reviewer prompt, not an implementer product file: docs/status/CODEX-SESSION-5.md:1, docs/status/CODEX-SESSION-5.md:8, docs/status/CODEX-SESSION-5.md:44.

## Any faked, hardcoded, or mocked success path? (findings or "checked: <list>, none found")

Checked: local persistence path, server action, post-save redirect, route render path, and browser-cache risk. No fake local success path found.

`appendDayLogEntry()` uses `fs/promises`, reads the existing JSON log, and writes the appended array back to disk: lib/day-log.ts:1, lib/day-log.ts:59, lib/day-log.ts:60, lib/day-log.ts:61. Missing `data/day-log.json` is created by the same helper path before reads: lib/day-log.ts:25, lib/day-log.ts:26, lib/day-log.ts:31, lib/day-log.ts:32. The server action validates input, awaits `appendDayLogEntry()`, revalidates `/`, and redirects back to `/`: app/actions.ts:16, app/actions.ts:22, app/actions.ts:26, app/actions.ts:33, app/actions.ts:34.

The page is a server component without client state, opts into dynamic rendering, and reads from `readDayLog()` during render: app/page.tsx:4, app/page.tsx:13, app/page.tsx:14. The visible log is rendered from those entries after the redirect: app/page.tsx:103, app/page.tsx:108, app/page.tsx:116.

## Same behavior hosted as locally? (reasoning)

No. This implementation is explicitly local-file persistence and should not be expected to behave the same on a hosted serverless platform.

The storage path is `path.join(process.cwd(), "data")` and `path.join(DATA_DIR, "day-log.json")`: lib/day-log.ts:22, lib/day-log.ts:23. The write path depends on `mkdir()` and `writeFile()` at that repository-relative location: lib/day-log.ts:26, lib/day-log.ts:61. That can fail on read-only filesystems and can also be ephemeral across serverless invocations or deployments. T-001 excludes hosted persistence, so this is not a reason to demand a hosted store inside this slice: docs/specs/SPEC-T-001.md:49, docs/specs/SPEC-T-001.md:50. It must be carried forward as a T-002+ design constraint before any hosted preview is treated as persistent.

## Tier lens sections: Tier 2

Product quality: The local input -> save -> display loop is coherent and the placeholder crew labeling is visible: app/page.tsx:39, app/page.tsx:52, app/page.tsx:88, app/page.tsx:99. Finding SHOULD-FIX-001 below covers a product semantics gap in the "Today's Log" label.

Tests: Manual steps are followable: the spec lists open page, enter task/status, save, confirm, reload, confirm: docs/specs/SPEC-T-001.md:53, docs/specs/SPEC-T-001.md:58. The evidence records a local browser run through those steps: docs/evidence/T-001-EVIDENCE.md:174, docs/evidence/T-001-EVIDENCE.md:183, docs/evidence/T-001-EVIDENCE.md:185, docs/evidence/T-001-EVIDENCE.md:199. Automated tests are not required by this implementation plan; CI install/lint/build is the required automated surface: docs/design/IMPLEMENTATION-PLAN-T-001.md:22, docs/design/IMPLEMENTATION-PLAN-T-001.md:24.

Rollback: Finding NIT-001 covers an under-scoped rollback statement. The plan allows scaffolding and CI changes but the rollback line names only the app files plus data file: docs/design/IMPLEMENTATION-PLAN-T-001.md:10, docs/design/IMPLEMENTATION-PLAN-T-001.md:17, docs/design/IMPLEMENTATION-PLAN-T-001.md:26.

Regression risk: Main current risk is semantic drift around "today" once the local JSON file spans more than one date. Secondary future risk is that the read-modify-write append path is not concurrency-safe if multiple submissions happen at the same time: lib/day-log.ts:60, lib/day-log.ts:61. I am not raising concurrency as a required T-001 change because the approved slice is a single-user local proof.

## Findings: BLOCKER / SHOULD-FIX / NIT (file + line)

SHOULD-FIX-001: "Today's Log" is not limited to today's entries.

The spec says the page shows today's log and excludes a multi-day view: docs/specs/SPEC-T-001.md:21, docs/specs/SPEC-T-001.md:49, docs/specs/SPEC-T-001.md:51. The implementation reads the entire `data/day-log.json` array and renders it without filtering by `timestamp` or using a date-scoped file: lib/day-log.ts:40, lib/day-log.ts:50, lib/day-log.ts:56, app/page.tsx:14, app/page.tsx:103, app/page.tsx:108. After the local file contains an entry from a prior date, that prior entry will still render under today's date and "Today's Log." This is a current product-quality mismatch even though same-day reload persistence works.

SHOULD-FIX-002: Hosted behavior is not equivalent to local behavior and must be explicitly designed before T-002+ relies on persistence.

The persistence helper writes to `process.cwd()/data/day-log.json` through `fs/promises`: lib/day-log.ts:1, lib/day-log.ts:22, lib/day-log.ts:23, lib/day-log.ts:59, lib/day-log.ts:61. That is acceptable for the T-001 local-only slice, but it can fail or disappear on hosted platforms with read-only or ephemeral filesystems. The evidence risks mention no hosted deployment ID but do not explicitly state that this storage method will not survive hosted persistence unchanged: docs/evidence/T-001-EVIDENCE.md:226, docs/evidence/T-001-EVIDENCE.md:230. This should be tracked before the next persistence slice.

NIT-001: Rollback documentation is narrower than the actual changed-file set.

The implementation plan's rollback statement says to delete the three new app files plus the data file: docs/design/IMPLEMENTATION-PLAN-T-001.md:26. The actual changed-file list also includes scaffold/config files, CSS/layout, CI, gitignore, lockfile, and status/evidence artifacts: docs/evidence/T-001-EVIDENCE.md:29, docs/evidence/T-001-EVIDENCE.md:44. The rollback instruction should say to revert the T-001 implementation commit or explicitly list scaffold/config/CI artifacts so rollback is mechanically unambiguous.

## Verdict: REQUEST CHANGES
