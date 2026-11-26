import { mkdirSync, writeFileSync } from "node:fs";

// A band made of robots, and its hit song.
const LIMIT = 199;
const text = "The Captchas, whose hit single \"Select All Squares With Love\" has never once been finished by a human listener.";

if ([...text].length > LIMIT) throw new Error(`entry is ${[...text].length} characters`);
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, text);
