# PRFAQ: Feltlog — Field Installation Tracker

## Customer
The foreman/coordinator running a shelving installation project (the role
Yousef has held at sites like Hjulmagervej). Not the individual installers —
this is a single-operator tool for whoever is accountable for the day's
record.

## Problem
Right now, tracking who worked which day on which task, what's blocked, and
what the week looked like lives across scattered Excel tabs, memory, and
paper. Reconstructing "what actually happened" after the fact — for payroll
disputes, blocker patterns, or reporting to the client — is slow and
error-prone. This is the same problem class that produced the manual
Overblik/Registrering/Timeseddel Excel system on past projects.

## Press-release outcome
Feltlog lets a foreman log a full day — who worked, on what, what's blocked
— from one shared link, in under two minutes, on a phone, with no login.
At any point, the foreman can pull a clean summary of the project to date
without opening a spreadsheet.

## User-visible behavior
- Open one shared URL (no login — single foreman, single active project).
- See today's date and a list of crew members.
- For each crew member: assign a task, mark status (done / in progress /
  blocked), and optionally note an issue.
- See a running daily log and a simple project summary (hours/tasks by
  person, open blockers).
- Export or view a plain summary of the project to date.

## FAQ
1. **What happens if two people edit the same day's log at once?**
   Not a v1 concern — single foreman, single device, single active project
   (WIP=1 mirrors the constitution's own rule). Last-write-wins is accepted.
2. **What happens with no internet on site?**
   Confirmed: the reference site has reliable connectivity. Offline support
   is explicitly out of scope for v1 (see Non-goals).
3. **Who can see this data?**
   Confirmed: a single shared link, foreman-only, no per-worker login in v1.
   This is a deliberate risk tradeoff — see Risks.

## Non-goals
- Not a payroll system (no wage calculation, no invoicing).
- Not a scheduling/rostering tool.
- Not multi-project in v1 — one active project at a time.
- Not offline-capable in v1.
- Not per-worker authenticated access in v1.

## Success metric
A foreman can log a complete day (all crew, tasks, statuses) in under two
minutes, and can produce an end-of-week summary without opening Excel.

## Risks
- **Shared-link access model**: anyone with the link can edit. Accepted for
  v1 because the link is not published and the data is operational, not
  financial or personal-sensitive at a regulated level. Revisit if the tool
  is used beyond a single trusted foreman.
- **No offline mode**: a connectivity failure on site blocks logging for
  that period. Accepted per confirmed site conditions.

## Founder acceptance statement
Decision: PASS
Founder note: Confirmed via chat, 2026-07-03.
