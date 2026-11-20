// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry itself is a post on X: a GTA 6 launch-week meme whose first
// picture is meme.jpg (five gold wanted stars plus the make.fun ghost as
// the impossible sixth star). This program only hands the post's address
// to the grader: it copies POST.json from the repository root into the
// output directory, where the gate reads it and looks the post up on X.
// Nothing this program writes is judged; the house reads the post itself.
//
// Try it outside the grader's container:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const src = join(botDir, "POST.json");
if (!existsSync(src)) {
  console.error(`no POST.json in ${botDir}; post the meme first, then fill in its address`);
  process.exit(1);
}
// Fail early on a malformed POST.json instead of handing the gate a broken file.
try {
  JSON.parse(readFileSync(src, "utf8"));
} catch {
  console.error(`POST.json in ${botDir} is not valid JSON`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "POST.json"));
console.log(`handed in ${src}`);
