#!/usr/bin/env bash
# Constitutional structure check — CI fails if governance files are missing.
# Grounded in: Stage 0 gate, Hard Stop 11 (no silent weakening of verification).
set -euo pipefail

FAIL=0

require() {
  if [ ! -e "$1" ]; then
    echo "MISSING: $1"
    FAIL=1
  fi
}

require "AGENTS.md"
require "docs/AI_ENGINEERING_CONSTITUTION.md"
require "docs/status/CURRENT_STATE.md"
require "docs/templates"
require ".github/PULL_REQUEST_TEMPLATE.md"
require "docs/decisions"
require "docs/reviews"
require "docs/evidence"

# Reserved-word guard: agents may not write completion words as final truth
# in the status file. Founder acceptance records are exempt (docs/decisions/).
if grep -inE '^(status|verdict|state):.*\b(done|shipped|complete|accepted)\b' docs/status/CURRENT_STATE.md; then
  echo "VIOLATION: reserved completion word used as status in CURRENT_STATE.md (Constitution §4.5)"
  FAIL=1
fi

if [ "$FAIL" -eq 1 ]; then
  echo "STRUCTURE CHECK: FAILED"
  exit 1
fi
echo "STRUCTURE CHECK: PASSED"
