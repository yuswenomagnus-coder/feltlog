# DECISION-0003 — Process Amendment: Lightweight Path for Non-Functional Findings

**Date:** 2026-07-05
**Status:** Ratified by founder in chat ("ok. lets do it."), following review of
T-001's actual token/session cost.

## What happened
Stage 0 took 3 Codex verification round-trips, one of which was a stale
status-file pointer that the founder ultimately fixed himself in one
edit, no agent needed. T-001 took 4 sessions (build, review, fix,
re-review) — 3 of which were earning their cost (a fresh Reviewer caught
a real date-filtering bug the Implementer's own test couldn't have
found), but the pattern of routing EVERY finding through a full
fresh-session, full-context-reload cycle regardless of whether it's a
code/behavior finding or a documentation/pointer finding is disproportionate.

## Decision
**Code and behavior findings** (anything that changes what the system
does or could hide a fake success path) KEEP the full discipline:
Implementer fix → fresh Reviewer re-check, no shortcuts. This is the
load-bearing mechanism — it is what caught the real bug in T-001 and it
does not get weakened.

**Non-functional findings** — stale status-file pointers, imprecise
rollback wording, doc typos, comment corrections — are fixed DIRECTLY by
the Architect or Founder, in the same turn they're found, with a one-line
note in the relevant evidence/decision file. No fresh Codex session
required. This does not weaken Law 2 (producer never certifies) because
nothing is being "certified" — a documentation correction isn't a claim
about system behavior, it's a factual correction anyone can check by
reading the file.

**Batching (already good practice, now policy):** when a Reviewer
returns multiple findings in one receipt, all of them go to ONE
Implementer fix session, not one session per finding.

## What would prove this wrong
If a "non-functional" finding turns out to hide a behavior claim (e.g. a
rollback line that's wrong in a way that would actually break a real
rollback attempt), it should have gone through the full loop. When in
doubt, treat it as functional and use the full cycle.

## Founder ratification
Decision: PASS — "ok. lets do it." (chat, 2026-07-05)
