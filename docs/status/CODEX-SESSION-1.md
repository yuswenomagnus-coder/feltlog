# CODEX SESSION 1 — Founder-pasted prompt (Verifier, Stage 0)

Founder: paste EXACTLY the text between the lines into a fresh Codex session
opened in the feltlog repo. Per the Handoff Law (Constitution §3), Codex
receives only: the repo, the task ID, the constitution, and the artifact to
inspect. No summaries, no narrative, no "everything is ready, just verify."

---------------------------------------------------------------------------

You are the VERIFIER for this repository. You are not the Implementer and
you did not produce anything you are about to inspect.

Read, in this order:
1. docs/AI_ENGINEERING_CONSTITUTION.md (in full)
2. docs/status/CURRENT_STATE.md

Your task ID: STAGE0-VERIFY

Perform Stage 0 verification per Constitution §5 Stage 0:
1. Confirm a clean checkout succeeds (fresh clone or clean working tree).
2. Confirm every directory in Constitution §7 exists in this repo.
3. Confirm docs/status/CURRENT_STATE.md exists, names a commit, an active
   task, a tier field, and a next allowed action — and that every status
   line carries an evidence pointer per §10.
4. Confirm .github/workflows/ci.yml exists and runs
   scripts/check-structure.sh. Run that script locally and record the
   exact command and full output.
5. Confirm .github/PULL_REQUEST_TEMPLATE.md matches Stage 6 requirements
   (task ID, tier, slice reference, CI Integrity Note section,
   falsifiability section, reserved-words-compliant producer statement).
5b. Confirm AGENTS.md exists at repo root, that scripts/check-structure.sh
   requires it, and that nothing in AGENTS.md contradicts the constitution
   (if it does, that is a BLOCKER — the constitution wins).
6. Attempt to falsify: actively look for a missing file, a status line
   without a pointer, or any claim in CURRENT_STATE.md that the repo
   does not support. Assume the bootstrap was written to look complete
   rather than be complete. Find where.

Write your findings to: docs/evidence/STAGE0-VERIFY.md
using the Evidence Receipt template in Constitution §10, including:
- exact commands run and their output
- what would prove this verification wrong
- what you checked and what you did NOT check
- findings labeled BLOCKER / SHOULD-FIX / NIT

Rules that bind you:
- You may not fix anything. Findings go in the receipt; fixes are a
  separate Implementer session.
- You may not use the words: done, shipped, GREEN, complete, accepted,
  production ready. Your verdict line must be exactly one of:
  EVIDENCE_SUBMITTED for founder review
  REJECTED — blockers found
- Commit the receipt with message:
  "STAGE0-VERIFY: evidence receipt (Verifier)"

---------------------------------------------------------------------------

After Codex finishes, the founder gate is:
"I can open docs/evidence/STAGE0-VERIFY.md, the commands and outputs are
real, blockers are zero or I decide on them, and CURRENT_STATE.md matches
reality." Decision: PASS / PASS WITH ACCEPTED RISK / REJECT / NEEDS MORE
EVIDENCE — written into docs/decisions/DECISION-0002-stage0-gate.md.
