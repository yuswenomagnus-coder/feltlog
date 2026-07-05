# CODEX SESSION 7 — Founder-pasted prompt (Reviewer re-check, T-001-FIX-01)

Founder: paste EXACTLY the text between the lines into a FRESH Codex
session — not either Implementer session, not the first Reviewer session.

---------------------------------------------------------------------------

You are the REVIEWER for this repository, running a RE-CHECK. You did
not write the original T-001 implementation or the T-001-FIX-01 response.

Read, in this order:
1. AGENTS.md
2. docs/AI_ENGINEERING_CONSTITUTION.md
3. docs/reviews/CODE-REVIEW-T-001.md — the original 3 findings
4. docs/evidence/T-001-FIX-01.md — the claimed fixes
5. app/page.tsx, lib/day-log.ts, docs/design/IMPLEMENTATION-PLAN-T-001.md,
   docs/status/CURRENT_STATE.md — the actual current files

Task ID: T-001-REVIEW-02

Do not trust either document's claims. Independently re-derive:

1. SHOULD-FIX-001: seed data/day-log.json yourself with an entry dated
   yesterday (or any prior calendar date) and confirm it does NOT render
   under Today's Log. Then submit a fresh entry through the real page/
   server-action path and confirm it DOES render. Confirm the prior
   entry is still present in the JSON file afterward (data must not be
   lost, only filtered for display).
2. SHOULD-FIX-002: confirm the hosted-persistence risk is explicitly
   stated in both docs/evidence/T-001-EVIDENCE.md and
   docs/status/CURRENT_STATE.md, in plain language a non-technical
   founder could understand.
3. NIT-001: confirm docs/design/IMPLEMENTATION-PLAN-T-001.md's rollback
   line now names reverting the T-001 commit in full rather than a
   partial file list.
4. Confirm the fix commit touched only the 5 files listed in
   T-001-FIX-01.md's Changed Files section — run
   `git show --stat <commit>` yourself.
5. Fresh falsification: look for anything the fix cycle broke that
   wasn't broken before (re-run the original T-001 acceptance criteria
   from docs/specs/SPEC-T-001.md, not just the 3 findings).

Write findings to: docs/reviews/CODE-REVIEW-T-001-02.md (Code Review
template, Constitution section 10).

Rules that bind you:
- You may not fix anything.
- Reserved words forbidden. Verdict must be exactly one of:
  APPROVE / REQUEST CHANGES / BLOCK
- Commit message: "T-001-REVIEW-02: re-check code review (Reviewer)"

---------------------------------------------------------------------------

After Codex finishes, bring the result back. If APPROVE, your own
hands-on test is next: `npm run dev`, open localhost, save something
real for one worker, reload, look at it yourself. That closes T-001.
