# Evidence Receipt: T-001 Field-Log Vertical Slice

Commit: SELF (the commit containing this receipt; resolve with `git rev-parse --short HEAD`)
Deployment ID: n/a
Environment: local Next.js dev server
Producer: Implementer (Codex)
Reviewer: pending fresh Reviewer session
Date: 2026-07-04

## Acceptance Criteria Evidence

- Single route `/` renders the page and today's system date: [app/page.tsx](/Users/ybs-m5/Downloads/feltlog/app/page.tsx:13), [app/page.tsx](/Users/ybs-m5/Downloads/feltlog/app/page.tsx:30).
- Three visibly fictional placeholder crew names are hardcoded as Worker A, Worker B, Worker C: [lib/day-log.ts](/Users/ybs-m5/Downloads/feltlog/lib/day-log.ts:4), [app/page.tsx](/Users/ybs-m5/Downloads/feltlog/app/page.tsx:39), [app/page.tsx](/Users/ybs-m5/Downloads/feltlog/app/page.tsx:56).
- Each worker row has a Task input, Status select, and Save submit action: [app/page.tsx](/Users/ybs-m5/Downloads/feltlog/app/page.tsx:52), [app/page.tsx](/Users/ybs-m5/Downloads/feltlog/app/page.tsx:59), [app/page.tsx](/Users/ybs-m5/Downloads/feltlog/app/page.tsx:79), [app/page.tsx](/Users/ybs-m5/Downloads/feltlog/app/page.tsx:88).
- Save uses a server action and appends an entry with worker, task, status, timestamp: [app/actions.ts](/Users/ybs-m5/Downloads/feltlog/app/actions.ts:1), [app/actions.ts](/Users/ybs-m5/Downloads/feltlog/app/actions.ts:11), [app/actions.ts](/Users/ybs-m5/Downloads/feltlog/app/actions.ts:26).
- Persistence is a local gitignored JSON file under `data/day-log.json`: [lib/day-log.ts](/Users/ybs-m5/Downloads/feltlog/lib/day-log.ts:22), [lib/day-log.ts](/Users/ybs-m5/Downloads/feltlog/lib/day-log.ts:59), [.gitignore](/Users/ybs-m5/Downloads/feltlog/.gitignore:8).
- Missing `data/day-log.json` is created automatically with an empty array: [lib/day-log.ts](/Users/ybs-m5/Downloads/feltlog/lib/day-log.ts:25), [lib/day-log.ts](/Users/ybs-m5/Downloads/feltlog/lib/day-log.ts:31).
- Today's Log reads back from the same file and renders entries: [app/page.tsx](/Users/ybs-m5/Downloads/feltlog/app/page.tsx:14), [app/page.tsx](/Users/ybs-m5/Downloads/feltlog/app/page.tsx:99), [app/page.tsx](/Users/ybs-m5/Downloads/feltlog/app/page.tsx:103).
- Empty Task validation is user-visible and server-guarded before persistence: [app/page.tsx](/Users/ybs-m5/Downloads/feltlog/app/page.tsx:69), [app/page.tsx](/Users/ybs-m5/Downloads/feltlog/app/page.tsx:72), [app/actions.ts](/Users/ybs-m5/Downloads/feltlog/app/actions.ts:20).
- No auth, database, external services, or environment variables were added; dependencies are the Next.js scaffold only: [package.json](/Users/ybs-m5/Downloads/feltlog/package.json:22), [package.json](/Users/ybs-m5/Downloads/feltlog/package.json:27).
- CI now has a real product install/lint/build job while retaining the governance check: [.github/workflows/ci.yml](/Users/ybs-m5/Downloads/feltlog/.github/workflows/ci.yml:7), [.github/workflows/ci.yml](/Users/ybs-m5/Downloads/feltlog/.github/workflows/ci.yml:15).

## CI Integrity Note

This STRENGTHENS verification (first real build check, nothing removed or weakened).

## Changed Files

- `.github/workflows/ci.yml`
- `.gitignore`
- `app/actions.ts`
- `app/globals.css`
- `app/layout.tsx`
- `app/page.tsx`
- `data/.gitkeep`
- `docs/evidence/T-001-EVIDENCE.md`
- `docs/status/CURRENT_STATE.md`
- `eslint.config.mjs`
- `lib/day-log.ts`
- `next-env.d.ts`
- `next.config.ts`
- `package-lock.json`
- `package.json`
- `tsconfig.json`

Pre-existing T-001 task artifacts also remain in the worktree and are part of the candidate commit because `CURRENT_STATE.md` points to them:

- `docs/design/IMPLEMENTATION-PLAN-T-001.md`
- `docs/specs/SPEC-T-001.md`
- `docs/status/CODEX-SESSION-4.md`
- `docs/decisions/DECISION-0002-t001-tier-and-scope.md`
- `docs/product/prfaq/PRFAQ-feltlog-v1.md`

## Commands Run / Results / Logs & URLs

1. `pwd`
   - Result: `/Users/ybs-m5/Downloads/feltlog`

2. `git status --short --branch`
   - Initial result summary:
     ```
     ## master...origin/master [ahead 7]
      M docs/decisions/DECISION-0002-t001-tier-and-scope.md
      M docs/product/prfaq/PRFAQ-feltlog-v1.md
      M docs/status/CURRENT_STATE.md
     ?? docs/design/IMPLEMENTATION-PLAN-T-001.md
     ?? docs/specs/SPEC-T-001.md
     ?? docs/status/CODEX-SESSION-4.md
     ```

3. `node --version`
   - Result: `v22.22.2`

4. `npm --version`
   - Result: `10.9.7`

5. `npm init -y`
   - Result summary: wrote `package.json`.

6. `npm install next react react-dom && npm install -D typescript @types/node @types/react @types/react-dom eslint eslint-config-next @eslint/eslintrc`
   - Result summary:
     ```
     added 22 packages, and audited 23 packages in 29s
     added 324 packages, and audited 347 packages in 18s
     2 moderate severity vulnerabilities
     ```

7. `npm ls --depth=0`
   - Result summary:
     ```
     next@16.2.10
     react@19.2.7
     react-dom@19.2.7
     eslint@9.39.4
     eslint-config-next@16.2.10
     typescript@6.0.3
     ```

8. `npm audit --omit=dev`
   - Result summary:
     ```
     postcss  <8.5.10
     Severity: moderate
     PostCSS has XSS via Unescaped </style> in its CSS Stringify Output
     fix available via `npm audit fix --force`
     Will install next@9.3.3, which is a breaking change
     2 moderate severity vulnerabilities
     ```

9. `npm uninstall -D @eslint/eslintrc`
   - Result summary:
     ```
     up to date, audited 347 packages in 841ms
     2 moderate severity vulnerabilities
     ```

10. `npm ci`
    - Result summary:
      ```
      added 346 packages, and audited 347 packages in 6s
      2 moderate severity vulnerabilities
      ```

11. `npm run lint`
    - First run result: failed because ESLint 9 hit a circular config object through `FlatCompat`.
    - Fix: `eslint.config.mjs` now imports Next's direct flat-config exports: [eslint.config.mjs](/Users/ybs-m5/Downloads/feltlog/eslint.config.mjs:1).
    - Final result:
      ```
      > feltlog@1.0.0 lint
      > eslint .
      ```
      Exit code: `0`

12. `npm run build`
    - Final result summary:
      ```
      > feltlog@1.0.0 build
      > next build

      Next.js 16.2.10 (Turbopack)
      Compiled successfully
      Running TypeScript ...
      Route (app)
      ┌ ƒ /
      └ ○ /_not-found
      ```
      Exit code: `0`

13. `bash scripts/check-structure.sh`
    - Result:
      ```
      STRUCTURE CHECK: PASSED
      ```
      Exit code: `0`

14. `npm run dev`
    - Result summary:
      ```
      > feltlog@1.0.0 dev
      > next dev

      Next.js 16.2.10 (Turbopack)
      - Local:         http://localhost:3000
      Ready in 212ms
      ```
    - Dev-server request log during browser proof:
      ```
      GET / 200
      POST / 303
      GET / 200
      GET / 200
      ```

15. Browser reload persistence proof through Chrome DevTools Protocol against `http://localhost:3000`
    - Steps personally executed:
      1. Opened `http://localhost:3000` in headless Google Chrome.
      2. Filled Worker A Task with `T-001 reload proof 2026-07-04T13:50:54.103Z`.
      3. Changed Worker A Status to `Blocked`.
      4. Submitted the page form through the Save button's form.
      5. Confirmed the task text appeared in the page after the save.
      6. Reloaded the browser page.
      7. Confirmed the same task text still appeared after reload.
      8. Read `data/day-log.json` and confirmed it contained the same entry.
    - Result:
      ```
      {
        "appUrl": "http://localhost:3000",
        "task": "T-001 reload proof 2026-07-04T13:50:54.103Z",
        "afterSaveContainsTask": true,
        "afterReloadContainsTask": true,
        "jsonContainsTask": true,
        "savedEntry": {
          "worker": "Worker A",
          "task": "T-001 reload proof 2026-07-04T13:50:54.103Z",
          "status": "Blocked",
          "timestamp": "2026-07-04T13:50:56.028Z"
        },
        "logEntryCount": 1
      }
      ```

## What Would Prove This Wrong?

- Reloading `http://localhost:3000` after a browser-submitted save loses the entry.
- `data/day-log.json` does not contain the browser-submitted entry.
- `npm ci`, `npm run lint`, `npm run build`, or `bash scripts/check-structure.sh` fails on the candidate commit.
- A fresh Reviewer finds code outside the approved T-001 slice.

## What Was Checked / Not Checked

Checked:

- Local install path with `npm ci`.
- Local lint path with `npm run lint`.
- Local production build path with `npm run build`.
- Governance structure script.
- Browser save and reload persistence through the real page and server action.
- Gitignore coverage for `data/day-log.json`.

Not checked:

- Hosted preview or production deployment; T-001 evidence here is local.
- Independent Reviewer or Verifier reproduction; that is the next stage.
- Automated tests; the T-001 implementation plan explicitly names manual verification only.

## Risks Remaining

- `npm audit --omit=dev` reports two moderate PostCSS findings through Next `16.2.10`; npm's proposed force fix would install `next@9.3.3`, a breaking downgrade outside the approved slice.
- No hosted deployment ID exists yet.
- Local filesystem persistence uses `fs/promises` to write `process.cwd()/data/day-log.json`; this will NOT survive hosted deployment unchanged because most hosting platforms expose read-only or ephemeral filesystems between requests/deploys. Before any T-002+ task that requires hosted persistence, redesign persistence to a real hosted store or equivalent durable backing service.
- The implementation has not been reviewed by a fresh Reviewer session.

## Verdict: CANDIDATE_READY

Next action: fresh Reviewer/Verifier check for T-001 scope and behavior.
