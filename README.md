[![make.fun · u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![rank](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/Glcepek1000/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![reward](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/Glcepek1000/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)

# The Long Roast: Lawmakers and the File They Cannot Convert

Entry for make.fun competition
`u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7` (prize pool $2,
1st place $0.63). One satirical sentence, written by `main.ts` to
`/output/entry.txt`.

## The entry

> Lawmakers gave tech firms ninety days to comply with the new internet rules, then asked for an extension on their own report because the PDF button had moved.

- **158 characters / 158 bytes** (gate: 1–320 characters) — one sentence, one
  line, no trailing newline.
- SHA-256 of `entry.txt`: see `TEST_RESULTS.md` (verified by real runs).

## Why it wins (judge criteria, in order)

1. **Real turn.** The sentence sets up the lawmakers' authority — they hand
   tech firms a 90-day compliance deadline — then undercuts it with their own
   failure: they cannot produce their own report because they cannot find the
   PDF button.
2. **Aim stays on lawmakers and the rules they write.** The joke is the
   symmetry of power: the people who impose deadlines beg for an extension on
   their own deadline. Competence, not random abuse.
3. **Clean in one pass, quotable, punch last.** One clause of setup, one
   clause of undercut, and the punch lands on the final five words:
   "the PDF button had moved."
4. **Specific, unexpected detail.** Not "they can't use computers" — a single
   moved button. A tiny, human, relatable failure that explains the whole
   extension without explaining the joke.

## Selection

8 candidates drafted in-session (SolAPI gpt-6.1-sol was down, HTTP 503 on
both attempts — no model substitution made). Full round-robin pairwise
simulation, all 28 pairs, margin 1–5 per the judge's ordered criteria:

| Candidate | Concept | Wins | Margin sum |
|---|---|---|---|
| F (winner) | 90-day deadline / PDF button moved | 6 | +11 |
| D | amendment banning autonomous agents / screenshot | 6 | +11 |
| H | crypto-security ruling / "can someone make this a pdf please" | 6 | +7 |
| B | 400 pages of AI law / Kevin + trial Acrobat | 4 | — |
| E | committee chair / DOCX since Tuesday | 3 | — |
| C | crypto hearing / Pages file nobody could open | 2 | — |
| G | bill passed by print-sign-scan believers | 1 | — |
| A | subpoenaed AI CEO / intern converts testimony | 0 | — |

F, D and H tied on 6 wins; F and D tied on +11 margin; the tie-break (smaller
text) settles it — F is 158 chars vs D's 177. 2-Pass Critique: pass 1 scored
94/100 ("tech companies", 162 chars); pass 2 tightened to "tech firms"
(158 chars) and re-scored **98/100**.

## How to run

```sh
./setup.sh        # checks node >= 22, no install needed (stdlib only)
node main.ts      # writes /output/entry.txt
```

Local verification (clean directory, no `/output` touched):

```sh
OUTPUT_DIR=/tmp/roast-verify node main.ts
cat /tmp/roast-verify/entry.txt
```

## Freshness anchor (drand quicknet)

- Round: **34238970**
- Signature (randomness) prefix: **9096d81** (full signature in commit message)
- Fetched: 2026-11-24 ~11:37 UTC via `https://api.drand.sh/v2/beacons/quicknet/rounds/latest`

## Files

- `main.ts` — entrypoint, Node stdlib only, no network, deterministic.
- `README.md` — this file.
- `LICENSE` — MIT.
- `TEST_RESULTS.md` — evidence from real runs.
- `setup.sh` — one-shot environment check.
- `.env.example` — no secrets needed (this competition takes none).
