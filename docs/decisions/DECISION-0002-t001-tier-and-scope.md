# DECISION-0002 — T-001 Tier Classification and Scope

**Date:** 2026-07-03
**Status:** Architect-proposed, pending founder confirmation (Constitution §2.0)
**Task ID:** T-001 (Phase A — smallest real vertical slice, per DECISION-0001)

## Mandatory tier questionnaire (Constitution §2.0)

Applied to the PROPOSED T-001 scope below, not the full Feltlog product.

```
Does this task touch:
[ ] database/schema        -- NO (throwaway local store, recreated fresh,
                                no migration tooling; founder confirmed
                                "local/throwaway first")
[ ] auth/login/session     -- NO (founder confirmed: single shared link,
                                no login)
[ ] permissions/RLS        -- NO (no auth exists, so no permission system)
[ ] user data              -- NO, CONDITIONAL: only if T-001 uses
                                fictional/placeholder crew names (e.g.
                                "Worker A/B" or clearly-fake test names),
                                not real Hjulmagervej crew members. See
                                Proposed Scope below — this is a scoping
                                choice, not a technicality.
[ ] payments/money         -- NO
[ ] production config      -- NO (dev/local or preview only, not a
                                production deployment)
[ ] deployment pipeline    -- NO (no CI/CD to production set up for
                                this slice)
[ ] migrations             -- NO (no migration files; matches schema=NO)
[ ] secrets/env vars       -- NO (local file store needs no connection
                                string or credentials)
[ ] external APIs          -- NO
[ ] rollback-sensitive     -- NO (nothing in production to roll back)
[ ] security/privacy       -- NO (no real personal data, no auth surface)
```

**All boxes NO under the stated conditions.** Per §2.0, this means Tier 3
auto-escalation does not trigger. Recommended: **Tier 2**, not Tier 1,
because entering data and updating what the list shows changes what the
user believes happened (Tier 1 negative rule, §2), so it doesn't qualify
for the Tier 1 fast path even though it's low-risk.

## Proposed T-001 scope (the actual slice)

A single page, single fixed demo project, showing:
- Today's date (system date, not editable)
- A short list of **fictional placeholder crew names** (not real workers —
  this is what keeps "user data" honestly at NO for this slice)
- For each name: assign a task (free text), set status (done / in progress
  / blocked)
- A visible list below showing what's been logged today
- Data persists to a local throwaway store (e.g. a local JSON file or
  SQLite file with no migration framework) — real enough to prove
  input → store → retrieve → display, not a static mock

**Explicitly deferred to a later, properly-tiered task:** real crew names,
hosted persistence (Supabase), the shared-link access model, multi-day
history, and the export/summary feature. T-001 proves the vertical slice
mechanism only — the same discipline that caught Kernen's static-facade
failure (Tasks 7–10 built as a Vite mock with no real backend).

## What would prove this wrong
If T-001 as implemented touches any of the YES-triggering conditions above
(real names, a hosted DB, any secret/env var, any auth), the tier
classification is wrong and must be re-run before proceeding.

## Founder confirmation
Decision: CONFIRM TIER 2
Signature: Confirmed via chat, 2026-07-03  Date: 2026-07-03
