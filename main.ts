// news-image-20261118 — "The World in One Day".
//
// One 1024x1024 newspaper front page summing up Wednesday 18 November 2026:
// Kuwait intercepting drones as the Gulf war widens, Trump meeting Marcos
// in Manila, the Dow's 849-point slide, the Gaza truce on the brink, and
// Asia's chip-stock rally. The page was laid out in poster.html and rendered
// to entry.png with a headless browser; this program ships that image as-is.
//
// It copies the image beside this file to the grader's output directory:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(here, "entry.png");

// Fail loudly when the image is missing instead of copying nothing: the
// judge sees exactly the bytes this file carries, so a missing source must
// never produce a silent empty output.
if (!existsSync(source)) {
  throw new Error(`entry.png not found beside main.ts (${source})`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
