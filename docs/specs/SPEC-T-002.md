# Spec + Design-lite: T-002 — Issues/Blockers + Multi-Day History

## Linked PRFAQ
docs/product/prfaq/PRFAQ-feltlog-v1.md
## Tier
Tier 2, CONFIRMED BY PRECEDENT — same conditions as T-001
(docs/decisions/DECISION-0002-t001-tier-and-scope.md): no auth, no
hosted DB, no secrets, no migrations, no payments, no external APIs,
fictional placeholder crew names, local throwaway store unchanged. No
material risk surface changed from T-001, so the full questionnaire is
not re-run in full — this note IS the tier record for T-002. If that
changes (real persistence, real names, auth), tier must be re-derived.

## Why bigger than T-001
T-001 deliberately proved the smallest possible real vertical slice.
Each Codex session pays a fixed cost regardless of feature size (full
context load, full npm ci/build/lint, real browser verification). T-002
bundles two related, low-risk, same-file-footprint features into one
slice so that fixed cost is amortized over more delivered value —
following DECISION-0003's cost lesson from T-001.

## User Story
As a foreman, in addition to logging today's task+status per worker, I
can (a) attach an optional issue/blocker note to any entry, and (b)
scroll back through previous days' logs without opening the JSON file.

## Acceptance Criteria — Feature A: Issue/Blocker note
- [ ] Each worker row gets an optional "Issue / blocker" text field,
      separate from Status.
- [ ] If filled, it saves alongside the entry and displays in the log
      (both Today's Log and History).
- [ ] If empty, entries save exactly as they do today — no regression.

## Acceptance Criteria — Feature B: Multi-day history
- [ ] A "History" section (or route) shows entries from all days OTHER
      than today, grouped by calendar date, most recent first.
- [ ] Today's entries still appear ONLY in "Today's Log" (no duplication
      into History for the current date).
- [ ] History is read-only — no editing past entries in T-002.
- [ ] If no prior-day entries exist, History shows a plain empty state,
      not an error.

## Error States
- Issue/blocker field has no required validation — empty is valid.
- History with zero historical entries: empty state message, no crash.

## Edge Cases
- An entry with a very long issue note: no truncation required for
  T-002, but must not visually break the layout (basic wrapping is
  sufficient).
- Multiple entries same worker same historical day: show all of them
  under that date, same append-only behavior as today.

## Data Touched
Same file: `data/day-log.json`. New field on each entry: `issue?:
string`. No schema migration tooling — this is a plain JSON file, adding
an optional field is non-breaking for existing entries (which simply
won't have it).

## Non-Goals (T-002 specific)
No editing/deleting historical entries. No date-range filtering or
search. No export/summary aggregation yet (deferred to T-003). No
pagination — if history grows large, that's a later concern.

## Test Requirements (manual, founder-runnable)
1. Add an entry with an issue note. Confirm it displays with the note
   attached, in Today's Log.
2. Confirm an entry saved on a prior day is not required for this test
   if none exists naturally — the Implementer must seed at least one
   historical-dated entry during testing to prove History renders it,
   then note whether that seed entry was left in the file or removed
   afterward.
3. Reload the page. Confirm both today's issue-noted entry and the
   historical entry (if seeded and kept) persist correctly in their
   respective sections.

## What Would Prove This Wrong
History accidentally shows today's entries too (double-counting), or an
issue note gets silently dropped on save, or adding the optional field
breaks reading of OLD entries that don't have it.

## Design-lite
- Extend `lib/day-log.ts`: add optional `issue` field to the entry type
  and to `appendDayLogEntry`; add a helper to group entries by calendar
  date excluding today (reuse the `isSameCalendarDate` logic from T-001
  rather than duplicating date logic).
- `app/actions.ts`: accept the new optional form field, pass through.
- `app/page.tsx`: add the issue input per row; add a History section
  below or beside Today's Log rendering grouped-by-date past entries.
- No new files strictly required — extending existing 3 files is
  expected, but a new `app/history` route or component file is
  acceptable if it keeps `page.tsx` from becoming unwieldy. Implementer's
  call, record the choice in evidence.
- **Rollback:** revert the T-002 implementation commit in full.

## Founder Plain-Language Check
"I can add a note about a problem next to someone's task, and I can
scroll down (or click somewhere) to see what was logged on a previous
day, without opening any file myself."
Decision: PASS / REJECT / NEEDS MORE EVIDENCE
