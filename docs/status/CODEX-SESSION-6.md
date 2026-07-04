# CODEX SESSION 6 — Founder-pasted prompt (Implementer, T-001 fix cycle)

Founder: paste EXACTLY the text between the lines into a FRESH Codex
session — not the Implementer session that built T-001, and not the
Reviewer session that reviewed it.

---------------------------------------------------------------------------

You are the IMPLEMENTER for this repository. Task ID: T-001-FIX-01.
Your entire scope is docs/reviews/CODE-REVIEW-T-001.md. Fix exactly its
three findings and nothing else.

Read first: AGENTS.md, docs/AI_ENGINEERING_CONSTITUTION.md,
docs/reviews/CODE-REVIEW-T-001.md, docs/specs/SPEC-T-001.md.

SHOULD-FIX-001 (real bug): "Today's Log" currently renders every entry
in data/day-log.json regardless of date, not just today's. Fix
lib/day-log.ts and/or app/page.tsx so the rendered "Today's Log" list is
filtered to entries whose timestamp falls on the current calendar date.
Do NOT delete or filter what gets WRITTEN to day-log.json — historical
entries should remain in the file; only the display must be date-scoped.
Verify your fix by manually adding a second entry to data/day-log.json
with yesterday's date (or an old timestamp) before testing, confirming
it does NOT appear in Today's Log, then confirming a fresh save from
today still does appear. Record this exact test in your evidence.

SHOULD-FIX-002 (tracked risk, not a code fix): Add an explicit, findable
note — in docs/evidence/T-001-EVIDENCE.md's Risks Remaining section AND
in docs/status/CURRENT_STATE.md's open risks — stating plainly that the
local filesystem persistence approach (fs/promises writing to
process.cwd()/data/day-log.json) will NOT survive hosted deployment
unchanged, because most hosting platforms have read-only or ephemeral
filesystems between requests/deploys. State that this must be
redesigned (e.g. to a real hosted store) before any T-002+ task that
requires hosted persistence.

NIT-001: Correct the rollback line in
docs/design/IMPLEMENTATION-PLAN-T-001.md. It currently only names 3 app
files + the data file, but the actual change set (per
docs/evidence/T-001-EVIDENCE.md's Changed Files list) includes
scaffold/config/CI files too. Replace the rollback line with something
mechanically unambiguous: reverting the T-001 implementation commit in
full (name it), not a manual file-by-file deletion list.

Rules that bind you:
- Scope is exactly these 3 findings. Nothing else.
- Reserved words forbidden. Final line exactly:
  CANDIDATE_READY at <commit> for Reviewer re-check (fresh session).
- Write docs/evidence/T-001-FIX-01.md (Evidence Receipt template,
  Constitution section 10) documenting exactly what changed and the
  yesterday-dated-entry test result.
- Run bash scripts/check-structure.sh, npm run lint, npm run build —
  record all three outputs.
- Update docs/status/CURRENT_STATE.md to point at this fix and the new
  commit.
- Commit message: "T-001-FIX-01: resolve reviewer findings (Implementer)"

---------------------------------------------------------------------------

After Codex finishes: fresh Reviewer session re-checks (reuse the
CODEX-SESSION-5.md pattern, pointed at T-001-FIX-01.md this time). Only
after that Reviewer approves does your own hands-on reload test happen.
