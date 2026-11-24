// Writes one office joke to /output/entry.txt for the make.fun
// "Make the AI Judge Laugh: Office Jokes" bounty.
// A single line, under 200 characters, nothing else.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE =
  "I hit reply-all by accident once; now I'm trapped in a 47-person thread about birthday cake that has outlived two managers and one merger.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Read-back self-check: the gate needs 1-199 characters, not only whitespace.
const written = readFileSync("/output/entry.txt", "utf8");
if (written.length < 1 || written.length > 199 || written.trim().length === 0) {
  throw new Error(`entry.txt failed the gate: ${written.length} characters`);
}
if (written !== JOKE) {
  throw new Error("entry.txt does not match the joke");
}
console.log(`entry.txt OK: ${written.length} characters`);
