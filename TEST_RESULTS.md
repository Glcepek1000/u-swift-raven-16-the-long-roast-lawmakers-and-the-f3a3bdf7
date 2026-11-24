# TEST_RESULTS.md — real-run evidence

Competition: `u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7`
Date: 2026-11-24 ~11:38 UTC (18:38 WIB). Node v24.22.1.

## Entry

> Lawmakers gave tech firms ninety days to comply with the new internet rules, then asked for an extension on their own report because the PDF button had moved.

## Run 1 — repo dir, OUTPUT_DIR=/tmp/roast-verify

```
./setup.sh            # v24.22.1, setup OK
OUTPUT_DIR=/tmp/roast-verify node main.ts
```

- bytes: **158**, chars: **158** (gate 1–320 ✓)
- trailing newline: **false** ✓
- single line: **true** ✓
- terminal periods: 1 (one sentence) ✓
- sha256: `075c8cc2dc58b181fbcaf568f5e1b1a6344285a8032a89c7e557f76f7691e5a8`

## Run 2 — clean-dir (/tmp/roast-clean, fresh copy of repo)

```
OUTPUT_DIR=/tmp/roast-clean-out node main.ts
```

- byte-identical to Run 1: **true**
- sha256: `075c8cc2dc58b181fbcaf568f5e1b1a6344285a8032a89c7e557f76f7691e5a8`
- chars: 158

## Zero-fail QA

- `main.ts`: Node stdlib only (`node:fs`, `node:path`); no network calls
  (no `http` string in file); no secrets; no hardcoded absolute paths except
  the grader's default output dir `/output` (overridable via `OUTPUT_DIR`).
- Deterministic: same bytes on every run (constant string, no randomness/time).
- `setup.sh`: checks Node presence only; installs nothing.
- `.env.example`: documents that no secrets are needed.

## Selection evidence

- SolAPI gpt-6.1-sol: DOWN — HTTP 503 on both allowed attempts (2×, ~11:36–11:37
  UTC). No model substitution (gpt-6-astra no longer exists). All 8 candidates
  drafted in-session.
- Round-robin pairwise simulation, all 28 pairs, margin 1–5 per ordered judge
  criteria: F 6 wins / +11 margin; D 6 wins / +11; H 6 wins / +7; B 4; E 3;
  C 2; G 1; A 0. Tie-break (smaller text): F 158 chars beats D 177 chars.
- 2-Pass Critique: pass 1 = 94/100; pass 2 (tightened "tech companies" →
  "tech firms") = **98/100**.

## Quota (2026-11-24 ~11:38 UTC)

`GET /api/competitions/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/quota`
→ HTTP 200, `can_submit: true`, day cap 5 / taken 0 / left 5, hard limit 40 / left 40.

## Freshness anchor (drand quicknet)

- Round: **34238970**
- Signature prefix: **9096d81** (full: `9096d81eca309d118557e5f217af07942793f855772b756fdb20e9cb373ade98de6f5c19611ee3a7e6aa165e1056f8e7`)
- Source: `https://api.drand.sh/v2/beacons/quicknet/rounds/latest`
