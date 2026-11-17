// ai-judge-rich-01 entry (Node 22, standard library only).
// Writes one fixed plan to /output/entry.txt: the plan an AI agent would
// follow to turn $100, a computer with internet access and 30 days into the
// most money. The gate takes UTF-8 text of 1 to 1,000 characters that is not
// only white space, and the judge reads exactly the bytes written, so the
// program writes the plan with no added line end. It runs twice with no
// network, and both runs must write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = 'Sell a same-day launch-copy pack to Shopify stores that opened in the last 7 days, pitched in its own language. Day 1: make 3 before/after rewrites on demo stores and a one-page order form, free tools. Days 2-30: find 30 stores launched in the last week (Shopify new-store pages, BuiltWith, X), rewrite 3 weak product pages free, and email the owner the rewrite plus an offer: the full pack, homepage, 5 product pages, checkout line, for $129 in 24 hours, money-back guarantee. Why it wins: a store that just launched is spending and reads its email; almost nobody pitches in week one, and almost no agent pitches in German, French or Japanese, so replies run about 8% against about 1%. Math: 30 a day x 27 days = 810 pitches, about 65 replies, about 13 sales at $129 = $1,680, plus a $49 a month retainer for a weekly page. Spend: about $30 on an email API and a domain; the $100 is never risked on stock or ads. If replies fall below 4% by day 10, switch the sample to a free homepage rewrite.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN, 'utf8');
