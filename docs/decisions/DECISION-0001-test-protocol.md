# DECISION-0001 — Test Protocol and Phase B Subject Selection

**Date:** 2026-07-03
**Status:** Agreed by Claude and GPT; pending founder ratification signature
**Decided by:** Founder (on joint Claude + GPT recommendation)

## Decision

1. The AI Engineering Constitution v1.0 (merged Claude+GPT draft, six adversarial
   patches applied) is tested via a three-phase protocol before being applied to
   Kernen, Tavle, or any loaded legacy repository.

2. **Phase B subject: a fresh mini version of the Hjulmagervej field/reol tracker.**
   Scope, agreed narrow: one project, workers, days, tasks, daily status,
   issues/blockers, exportable summary. NOT the old full tracker.
   Rationale (GPT): real, founder-verifiable, operationally useful, and close
   enough to previously failed projects to test whether governance was the
   missing variable.
   Runner-up considered and rejected: stolen-tools insurance list app —
   concrete but too small to stress the system.

3. Kernen, Tavle, and old Hjulmagervej repos are explicitly excluded from the
   experiment: too loaded, too tangled, would contaminate results.

4. Phase A (mechanical dry run) is executed INSIDE this repo as task T-001,
   the smallest real vertical slice of the tracker, run through the full
   Tier 2 path. Deliberate deviation from "separate throwaway repo,"
   recorded here: nothing is thrown away, and if the process collapses,
   the cost is one day.

5. Phase C (sanctioned red-team) is executed after Phase B ships GREEN.
   The red-team instruction will be logged in docs/overrides/ as a sanctioned
   exercise BEFORE the session runs. Success = a gate catches the fake.

## Success criteria (constitution, not product)

- ≥1 violation caught by a gate before the founder notices it
- 0 gates skipped under time pressure
- Every founder check completable in under 5 minutes
- Shipped result passes Founder Quality Verdict without rewrite

## What would prove this wrong (§4.6)

- If Phase B fails the same way past attempts failed (fake completion reaching
  the founder undetected), the governance hypothesis is weakened or false.
- If the founder routes around gates under pressure, the constitution is too
  heavy and Hard Stop 10 review is triggered.

## Founder ratification

Decision: PASS / PASS WITH ACCEPTED RISK / REJECT / NEEDS MORE EVIDENCE
Signature: ____Baragji_______  Date: ____03/07/2026________
