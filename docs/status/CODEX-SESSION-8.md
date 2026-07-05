# CODEX SESSION 8 — Founder-pasted prompt (Implementer, T-002 build)

Founder: paste EXACTLY the text between the lines into a fresh Codex
session.

---------------------------------------------------------------------------

You are the IMPLEMENTER for this repository. Task ID: T-002. Tier: 2
(by precedent — see docs/specs/SPEC-T-002.md's Tier section).

Read, in this order:
1. AGENTS.md
2. docs/AI_ENGINEERING_CONSTITUTION.md
3. docs/decisions/DECISION-0003-lightweight-nonfunctional-fixes.md — a
   process change since T-001; note it, it affects how findings on your
   own work will be handled later, not how you build.
4. docs/specs/SPEC-T-002.md — your acceptance criteria, both features
5. The current app/page.tsx, app/actions.ts, lib/day-log.ts — read the
   real current code, not just the spec, since it must extend T-001's
   actual implementation.

Build both features described in SPEC-T-002.md:
(A) an optional issue/blocker text field per log entry, saved and
displayed alongside task/status.
(B) a read-only multi-day history view showing all non-today entries
grouped by calendar date, most recent first, with an empty state if none
exist.

You will need at least one historical-dated entry to prove History
works. Seed one during testing (any past date, clearly test data), and
explicitly record in your evidence whether you left it in
data/day-log.json afterward or removed it, and why.

Reuse the existing `isSameCalendarDate` date logic rather than
duplicating it. Do not touch the write behavior established in T-001 —
adding the optional issue field must not break entries that lack it.

Rules that bind you (from AGENTS.md and the constitution):
- Scope: app/page.tsx, app/actions.ts, lib/day-log.ts, and optionally a
  new history-specific component/route file if you judge page.tsx would
  become unwieldy otherwise — record that judgment call in your evidence.
  No CI, scaffold, or config changes needed this time (already in place).
- No unlabeled TODO, mock, stub, or hardcoded success path.
- Reserved words forbidden. Final line exactly:
  CANDIDATE_READY at <commit> for Reviewer check.
- Write docs/evidence/T-002-EVIDENCE.md (Evidence Receipt template,
  Constitution §10): commands run, the seeded-historical-entry test
  result, the issue-note persistence test result, and a reload
  confirmation for both.
- Run bash scripts/check-structure.sh, npm run lint, npm run build —
  record all three outputs.
- Update docs/status/CURRENT_STATE.md (active task, current stage,
  pointers) yourself — this is a functional-state update tied to your
  own work, not a non-functional finding under DECISION-0003, so it
  stays your responsibility.
- Commit message: "T-002: issue notes + multi-day history (Implementer)"

---------------------------------------------------------------------------

After Codex finishes: bring the result back. Next is a fresh Reviewer
session (same pattern as T-001's CODEX-SESSION-5.md, retargeted at
T-002), then your own hands-on test.
