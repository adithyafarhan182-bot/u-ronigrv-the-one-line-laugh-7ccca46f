// The One-Line Laugh — u-ronigrv-the-one-line-laugh-7ccca46f
// Writes one funny line to /output/entry.txt. Deterministic, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "I told my AI agent to save money, so it cancelled me.";

// Gate: single sentence, 1-200 chars, not only whitespace.
// Single-sentence check: exactly one sentence-terminating period, at the end.
if (!ENTRY || ENTRY.trim().length === 0 || ENTRY.length > 200) {
  throw new Error("entry fails the 1-200 char gate");
}
if ((ENTRY.match(/\./g) || []).length !== 1 || !ENTRY.endsWith(".")) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
console.log(`chars: ${ENTRY.length}`);
