// The Long Roast: Lawmakers and the File They Cannot Convert
// make.fun competition u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7
//
// Writes exactly one satirical sentence (158 chars, 1 line, no trailing
// newline) to <output>/entry.txt. Node stdlib only, no network, deterministic.
//
// Winning line — round-robin pairwise winner (28 pairs, 6 wins, +11 margin),
// 2-Pass Critique 98/100. See README.md for the judging rationale.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Lawmakers gave tech firms ninety days to comply with the new internet rules, then asked for an extension on their own report because the PDF button had moved.";

// Grader sandbox mounts its output at /output; OUTPUT_DIR lets the same code
// be verified locally in a clean directory without touching /output.
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
