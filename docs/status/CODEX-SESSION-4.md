# CODEX SESSION 4 — Founder-pasted prompt (Implementer, T-001 build)

Founder: paste EXACTLY the text between the lines into a fresh Codex
session. This is the FIRST product code task in this repo.

---------------------------------------------------------------------------

You are the IMPLEMENTER for this repository. Task ID: T-001. Tier: 2
(confirmed — see docs/decisions/DECISION-0002-t001-tier-and-scope.md).

Read, in this order:
1. AGENTS.md
2. docs/AI_ENGINEERING_CONSTITUTION.md
3. docs/product/prfaq/PRFAQ-feltlog-v1.md
4. docs/specs/SPEC-T-001.md — your acceptance criteria
5. docs/design/IMPLEMENTATION-PLAN-T-001.md — your exact file scope

Build exactly the slice described in SPEC-T-001.md and
IMPLEMENTATION-PLAN-T-001.md. Summary: a single Next.js page showing
today's date and 3 hardcoded placeholder crew names ("Worker A", "Worker
B", "Worker C"), each with a Task input and a Status select, a Save
action that persists via a server action to a local JSON file
(data/day-log.json, gitignored), and a "Today's Log" list that reads
that file back and renders it. No auth. No database. No external
services. No environment variables required.

If Next.js is not yet scaffolded in this repo, scaffold it first
(TypeScript, App Router, ESLint — no Tailwind, no example boilerplate
beyond what's needed).

Add a real build/lint job to .github/workflows/ci.yml alongside the
existing governance structure-check job. Since this STRENGTHENS
verification (first real build check, nothing removed or weakened),
your CI Integrity Note in the PR evidence should say exactly that.

Rules that bind you (from AGENTS.md and the constitution):
- Scope is exactly the files named in IMPLEMENTATION-PLAN-T-001.md, plus
  whatever files Next.js scaffolding itself requires.
- No unlabeled TODO, mock, stub, or hardcoded success path. The
  placeholder crew names are explicitly allowed as placeholder — that is
  the approved design, not a hidden shortcut.
- Reserved words forbidden. Your final line must be exactly:
  CANDIDATE_READY at <commit> for Reviewer/Verifier check.
- Write docs/evidence/T-001-EVIDENCE.md (Evidence Receipt template,
  Constitution §10) including: commands run (install, build, lint, dev
  server start), and explicit confirmation that you personally tested
  the reload behavior (save an entry, stop and restart the dev server
  or reload the page, confirm the entry persists) — record the exact
  steps and output, not just "it works."
- Update docs/status/CURRENT_STATE.md: active task stays T-001, current
  stage moves to "Stage 6 — awaiting Reviewer," with pointers to your
  evidence file and this commit.
- Commit message: "T-001: build field-log vertical slice (Implementer)"

---------------------------------------------------------------------------

After Codex finishes: do NOT run the dev server and gate this yourself
without checking the evidence file first. Bring the CANDIDATE_READY
result back — next step is a FRESH Reviewer session (Constitution §5
Stage 7), then your own reload test as the founder-checkable output.
