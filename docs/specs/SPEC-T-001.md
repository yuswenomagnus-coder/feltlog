# Spec + Design-lite: T-001 — Smallest Real Vertical Slice

## Linked PRFAQ
docs/product/prfaq/PRFAQ-feltlog-v1.md (PASS)
## Linked Tier Decision
docs/decisions/DECISION-0002-t001-tier-and-scope.md (Tier 2, CONFIRMED)

## User Story
As a foreman, I open one page, see today's date and a short list of
placeholder crew names, assign a task and status to each, save, and see
the entry appear in a log below — and it survives a page reload.

## Acceptance Criteria
- [ ] Single route (e.g. `/`) shows today's system date.
- [ ] A fixed, visibly-fictional list of 3 crew names (e.g. "Worker A",
      "Worker B", "Worker C") — hardcoded, honestly labeled as placeholder.
- [ ] Per name: a Task text input + a Status select (Not started / In
      progress / Done / Blocked).
- [ ] A save action persists the entry to a local JSON file on disk via a
      server action (not client-only state).
- [ ] A "Today's Log" list renders by reading back from that same file.
- [ ] **Reloading the browser shows previously saved entries.** This is
      the single most important test — it is the difference between a
      real slice and a facade (the exact failure class Kernen Tasks 7–10
      produced).
- [ ] No authentication. No external services. No environment variables
      required to run.

## User Flow
Open page → see date + 3 placeholder names → fill Task + Status for one
or more → click Save → entry appears in Today's Log → reload browser →
entry still there.

## Error States
- Empty Task field on save: inline validation, do not persist.
- Data file missing on first run: code creates it automatically with an
  empty log array. Must not crash.

## Edge Cases
- Multiple saves for the same worker same day: each is appended as a new
  log entry, no dedup/overwrite logic required for T-001.
- Data directory missing: server action creates it.

## Data Touched
One local file: `data/day-log.json` (gitignored), array of
`{ worker, task, status, timestamp }`. No database, no schema migration
tooling, no external service.

## Non-Goals (T-001 specific)
No real crew names. No hosted persistence. No summary/export view yet
(later task). No multi-day view — today's log only. No auth.

## Test Requirements (manual, founder-runnable)
1. Open the page.
2. Enter a task + status for one worker, save.
3. Confirm it appears in Today's Log.
4. Reload the browser.
5. Confirm the entry is still there.

## What Would Prove This Wrong
Reloading the page loses the entry (proves it was in-memory only, not
real persistence — the specific fraud this slice exists to rule out).

## Design-lite
- **Stack:** Next.js App Router + TypeScript, matching the Kernen/Tavle
  convention. No ORM, no Supabase client — Node's `fs` module only.
- **Files:** `app/page.tsx` (UI + form), `app/actions.ts` (server action
  to save an entry), `lib/day-log.ts` (read/write helpers for the JSON
  file), `data/.gitkeep` (tracked; `data/day-log.json` itself gitignored).
- **Rollback:** delete the 3 new files + the data file. Nothing else in
  the system depends on them.

## Founder Plain-Language Check
"I can open the page, type something for one worker, save it, refresh my
browser, and it's still there."
Decision: PASS / REJECT / NEEDS MORE EVIDENCE
