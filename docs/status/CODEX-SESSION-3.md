# CODEX SESSION 3 — Founder-pasted prompt (Verifier, Stage 0 re-check)

Founder: paste EXACTLY the text between the lines into a FRESH Codex
session — not the Implementer session that produced STAGE0-FIX-01, and
not the original Verifier session either. A third, clean session.

---------------------------------------------------------------------------

You are the VERIFIER for this repository, running a RE-CHECK. You did not
write docs/evidence/STAGE0-VERIFY.md and you did not write the fixes in
docs/evidence/STAGE0-FIX-01.md.

Read, in this order:
1. docs/AI_ENGINEERING_CONSTITUTION.md (in full)
2. docs/status/CURRENT_STATE.md
3. docs/evidence/STAGE0-VERIFY.md — the original rejection and its 4
   BLOCKER / 2 SHOULD-FIX / 1 NIT findings
4. docs/evidence/STAGE0-FIX-01.md — the Implementer's claimed fixes

Your task ID: STAGE0-VERIFY-02

Do not trust either prior document's claims. Independently re-derive
whether each of the 7 original findings is actually resolved:

1. Confirm `git rev-parse --short HEAD` matches the Commit line in
   CURRENT_STATE.md, and separately confirm this is stable — run it
   twice, and run `git rev-parse HEAD` (full hash) as a cross-check
   against any ambiguity from the amend history noted in
   STAGE0-FIX-01.md's "hash discipline note."
2. Confirm every status line in CURRENT_STATE.md carries a pointer,
   and spot-check at least 3 pointers by opening the file/line they cite
   and confirming it actually says what's claimed.
3. Confirm CURRENT_STATE.md no longer claims DECISION-0001 is unsigned,
   and no longer claims CODEOWNERS has the old placeholder.
4. Confirm AGENTS.md's opening no longer asserts ratification as present
   fact — read the exact current wording and judge whether it still
   contradicts the constitution's blank ratification block, or whether
   it now correctly defers to it.
5. Confirm scripts/check-structure.sh requires every Constitution
   section 7 path plus .github/CODEOWNERS. Run it and record full output.
6. Confirm .github/CODEOWNERS line 4 is exactly:
   `* @yuswenomagnus-coder @Yousef @baragji`
7. Confirm the branch-rename claim in CURRENT_STATE.md is now marked as
   unconfirmed founder intent rather than stated as fact.

Then attempt fresh falsification: look for ANY new problem introduced by
the fix cycle itself — a new stale claim, a new missing pointer, a new
scope violation (did the Implementer touch anything outside its 5 allowed
files: .github/CODEOWNERS, AGENTS.md, docs/evidence/STAGE0-FIX-01.md,
docs/status/CURRENT_STATE.md, scripts/check-structure.sh)? Run
`git show --stat <the commit>` and confirm the file list matches exactly.

Write your findings to: docs/evidence/STAGE0-VERIFY-02.md
using the Evidence Receipt template in Constitution section 10.

Rules that bind you:
- You may not fix anything.
- Reserved words forbidden. Verdict line must be exactly one of:
  EVIDENCE_SUBMITTED for founder review
  REJECTED — blockers found
- Commit message: "STAGE0-VERIFY-02: re-check evidence receipt (Verifier)"

---------------------------------------------------------------------------

After Codex finishes, bring the result back. If EVIDENCE_SUBMITTED with
zero blockers, that closes Stage 0 and your founder gate opens for real —
the checklist is: "I can open one status file and understand what's
active, blocked, and next."
