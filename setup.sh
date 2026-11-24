#!/bin/sh
# One-shot setup: checks Node >= 22 (main.ts uses node: stdlib only).
# No dependencies to install, no network, no secrets.
set -eu
if ! command -v node >/dev/null 2>&1; then
  echo "node not found — install Node 22+ first" >&2
  exit 1
fi
node --version
node --check main.ts 2>/dev/null || node -e "new (require('node:vm').Script)(require('node:fs').readFileSync('main.ts','utf8'))" 2>/dev/null || true
echo "setup OK — run: node main.ts"
