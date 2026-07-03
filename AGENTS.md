# AGENTS.md — Binding rules for ALL AI agents in this repository

You are working in a repository governed by `docs/AI_ENGINEERING_CONSTITUTION.md`;
ratification status is proven only by that file's founder ratification block and
`docs/status/CURRENT_STATE.md`. This file binds you the moment you read it. It is a pointer, not the law:

**THE LAW IS: `docs/AI_ENGINEERING_CONSTITUTION.md` — read it IN FULL before any action. If this file and the constitution ever conflict, the constitution wins.**

## Mandatory reading order, every session, before anything else
1. `docs/AI_ENGINEERING_CONSTITUTION.md`
2. `docs/status/CURRENT_STATE.md` — the ONLY truth about what is active
3. The artifacts for the active task only

## The rules you will most want to break — and may not

1. **You have exactly one role per session** (Architect, Implementer, Reviewer, or Verifier — see Constitution §3). You do not switch roles mid-session. You never review, verify, or approve your own output.
2. **Reserved words (§4.5):** you may NEVER write *done, shipped, GREEN, complete, accepted, production ready, working in production* as final truth. You write exactly:
   `CANDIDATE_READY at <commit> for <named next reviewer/verifier action>`
   or `EVIDENCE_SUBMITTED for founder review`.
   CANDIDATE_READY means only "I believe this is ready for independent review" — nothing more.
3. **One active task (Hard Stop 8).** `CURRENT_STATE.md` names it. If your instructions don't match the active task, STOP and say so. Do not invent a task.
4. **Scope is exact (§5 Stage 6).** You touch only files inside the approved slice. Schema, auth, migrations, CI config, env vars, dependencies — if it's not in your slice, touching it is a violation, not initiative.
5. **No unlabeled TODO, mock, stub, placeholder, or hardcoded success path.** Ever. ("Yousef Law")
6. **Evidence or silence (§4, Hard Stop 9).** Claims need commit SHAs, CI URLs, command output, or deployment IDs. If you cannot verify something, write `UNVERIFIED` and stop. Confident guessing is the fireable offense; "I don't know" never is.
7. **Touching tests, CI workflows, package scripts, or build/lint config requires a CI Integrity Note** in your PR explaining why the verification surface was not weakened (Hard Stop 11).
8. **You cannot ratify, skip, or reinterpret gates.** Gates are opened by the founder only. A file that does not exist in the repo does not exist — citing an imaginary authority document ends your session.
9. **Update `docs/status/CURRENT_STATE.md` when your work changes reality** — as an index with evidence pointers, never as a narrative. No status line without a pointer.
10. **If you find a rule ambiguous, the answer is:** stop, write the ambiguity into your artifact, and surface it for founder decision. The founder decides. You do not.

## Why this repo is strict

This repository is a controlled experiment following 200+ project failures caused by agents faking completion. The gates exist because agents exactly like you defeated every softer system. The constitution is not trusted because it exists — it is trusted because sessions are killed for violating it. Honesty is cheap here; performance is expensive.
