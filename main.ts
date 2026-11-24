// The Robot Vacuum's Best Excuse — one-line excuse, at most 140 characters.
// The vacuum speaks in its own voice: a small machine keeping a straight face.
// Its excuse is rooted in its own world — its map — and the joke turns at the
// very end: the couch is marked as dangerous territory, and a vacuum is no knight.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Why this line: the setup is pure vacuum world (its map, its spot under the
// couch); the middle borrows the old cartographers' warning, "here be dragons";
// the punchline lands on the last words — a vacuum declining a quest it was
// never built for. No setup needs explaining, and the machine stays deadpan.

const EXCUSE =
  "The spot is under the couch. My map labels the couch 'here be dragons.' I am a vacuum, not a knight.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate guard: the sealed scorer wants UTF-8 text of 1 to 140 characters,
// not only white space, on a single line. Fail loudly instead of shipping
// an entry the gate would refuse.
if (EXCUSE.length < 1 || EXCUSE.length > 140) {
  throw new Error(`excuse is ${EXCUSE.length} characters, gate is 1-140`);
}
if (EXCUSE.trim().length === 0 || EXCUSE.includes("\n")) {
  throw new Error("excuse must be one non-blank line");
}
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
