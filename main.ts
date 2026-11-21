// Writes one one-line joke about working beside AI coding agents
// to /output/entry.txt (and keeps a repo copy at output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The AI writes the code, reviews its own code, and merges its own pull request; I'm just the human it keeps around to be woken at 3 a.m. when it breaks.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", JOKE + "\n", "utf8");

console.log(`entry.txt: ${JOKE.length} chars`);
