# CODEX SESSION 2 — Founder-pasted prompt (Implementer, Stage 0 fix cycle)

Founder: paste EXACTLY the text between the lines into a FRESH Codex
session (not a continuation of session 1). Per the Handoff Law, this
session receives only the repo, the task ID, the constitution, and the
specific evidence artifact naming what to fix — never a summary from the
session that wrote the rejected work.

---------------------------------------------------------------------------

You are the IMPLEMENTER for this repository. Task ID: STAGE0-FIX-01.

Read, in this order:
1. docs/AI_ENGINEERING_CONSTITUTION.md (in full)
2. AGENTS.md
3. docs/evidence/STAGE0-VERIFY.md — this is your ENTIRE scope. Fix exactly
   the findings listed below and nothing else. Touching files or claims
   outside this list is a scope violation, not initiative.

Fix exactly these findings from docs/evidence/STAGE0-VERIFY.md:

BLOCKER 1 + pointer discipline (BLOCKER 2): In docs/status/CURRENT_STATE.md,
replace every status line lacking a "→" evidence pointer with one that
names a real, checkable source (a file path, a git command, or an
existing decision record) — including lines 3,4,5,7,8,9,18,19,20,42-45,
47,48 as identified in the receipt. For the Commit line specifically:
commit all OTHER fixes first, run `git rev-parse --short HEAD` to get
the resulting hash, then set the Commit line to that exact hash and use
`git commit --amend` so the final commit hash matches what's recorded.
Verify after amending: `git rev-parse --short HEAD` must equal the value
now written in CURRENT_STATE.md line 3.

BLOCKER 3: Update docs/status/CURRENT_STATE.md to reflect current reality,
not stale state: DECISION-0001 IS signed (see
docs/decisions/DECISION-0001-test-protocol.md line 52) — remove the
"awaiting signature" claim and the matching founder-decision-needed item.
.github/CODEOWNERS does NOT contain the placeholder anymore — remove that
claim and replace with an accurate note (see SHOULD-FIX 2 below for the
real issue there).

BLOCKER 4: In AGENTS.md, the opening line overstates ratification status
as present-tense fact while the constitution's ratification block
(docs/AI_ENGINEERING_CONSTITUTION.md, near the end) is still blank.
Reword to be accurate and conditional — do not claim ratified until the
constitution's ratification block actually has a founder signature.
Point to both files as the source of truth instead of asserting the
state directly.

SHOULD-FIX 1: In scripts/check-structure.sh, expand the `require` calls
to cover every Constitution §7 directory explicitly (not just the
current subset), plus .github/CODEOWNERS.

SHOULD-FIX 2: .github/CODEOWNERS line 4 has a syntax problem — an extra
stray `*` token among the owner handles. FOUNDER HAS CONFIRMED: the real
GitHub account is @yuswenomagnus-coder; @Yousef and @baragji were added
deliberately for identity clarity, not by mistake. Fix the line to valid
CODEOWNERS syntax — one leading `*` path pattern, followed by all three
handles as owners: `* @yuswenomagnus-coder @Yousef @baragji`. Note in
your evidence receipt that GitHub CODEOWNERS only enforces review
requirements for tokens that are real, registered GitHub accounts or
teams — if @Yousef and @baragji are not separate GitHub accounts, they
will be silently inert and @yuswenomagnus-coder remains the functional
owner. This is informational, not a blocker.

NIT: docs/status/CURRENT_STATE.md claims the branch will be renamed to
main on GitHub push. Do not assume — add an evidence pointer noting this
is unconfirmed founder intent, not fact, per Constitution §10.

Rules that bind you:
- Scope is exactly the findings above. Nothing else.
- No unlabeled placeholder, no new claims without a pointer.
- You may not use the words: done, shipped, GREEN, complete, accepted,
  production ready. Your final line must be exactly:
  CANDIDATE_READY at <commit> for Verifier re-check (fresh session).
- Write docs/evidence/STAGE0-FIX-01.md (Evidence Receipt template,
  Constitution §10) documenting exactly what you changed, the commands
  you ran, and the UNVERIFIED CODEOWNERS note.
- Run bash scripts/check-structure.sh after your changes and record the
  output in the receipt.
- Commit with message: "STAGE0-FIX-01: resolve Stage 0 verifier blockers
  (Implementer)"

---------------------------------------------------------------------------

After Codex finishes: do NOT gate this yourself yet. The next required
step is a FRESH Verifier session (new Codex session, repo-only handoff,
same pattern as docs/status/CODEX-SESSION-1.md but pointed at
docs/evidence/STAGE0-FIX-01.md) to confirm the fixes actually hold before
your founder gate opens.
