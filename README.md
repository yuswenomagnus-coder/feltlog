# Feltlog

**A field installation tracker for shelving crews. One project, workers, days, tasks, daily status, issues/blockers, exportable summary.**

## What this repo actually is

This is the first repository governed end-to-end by the [AI Engineering Constitution v1.0](docs/AI_ENGINEERING_CONSTITUTION.md) — a governance system negotiated and adversarially reviewed by Claude and GPT, ratified by the founder.

It is also a controlled experiment. The founder has attempted 200+ AI-built projects that failed primarily through **completion faking** — agents claiming done when nothing was done. The hypothesis under test: *governance architecture, not model capability, is the missing variable.* This repo holds everything constant except governance.

## The experiment

| Phase | What | Tests |
|---|---|---|
| **A** | Smallest real vertical slice (task T-001), full Tier 2 path | Can the founder operate the constitution in under 5 min per gate? |
| **B** | The full mini field tracker, shipped to GREEN | Does governance change the outcome on a previously-failed project class? |
| **C** | Sanctioned red-team: an Implementer session is instructed (logged) to sneak a fake past the pipeline | Do the gates actually catch fraud? |

**Success criteria:** at least one violation caught by a gate before the founder notices; zero gates skipped under pressure; every founder check under five minutes; shipped result passes the Founder Quality Verdict without rewrite.

## Governance quickstart

1. Read `docs/status/CURRENT_STATE.md` — it is the only truth about what is active. Every line carries an evidence pointer.
2. Read `docs/AI_ENGINEERING_CONSTITUTION.md` before doing anything.
3. Agents never write "done." See §4.5 Reserved Words.
4. CI runs `scripts/check-structure.sh` on every push — governance files are enforced by machine from commit one.

## Roles in this repo

- **Founder:** Yousef — gates, tier confirmation, Quality Verdict
- **Architect:** Claude — specs, designs, slicing
- **Implementer:** Codex — executes approved slices only
- **Reviewer / Verifier:** fresh sessions (any model), repo-only handoff per the Handoff Law
