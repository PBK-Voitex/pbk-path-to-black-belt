import fs from 'node:fs';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');

const checks = [
  ['Three.js import', "three@0.180.0"],
  ['Bradley fighter', 'fighter("BRADLEY"'],
  ['Ryan fighter', 'fighter("RYAN"'],
  ['Punch scoring', "pts:1"],
  ['Kick scoring', "pts:2"],
  ['First-to-five match end', 'f.score>=5'],
  ['Restart control', "e.key.toLowerCase()==='r'"],
  ['Block control', "keys['l']"],
  ['Reset state', "state='reset'"],
  ['AI attack decision', 'tryAttack(ai,player']
];

let failed = false;
for (const [name, needle] of checks) {
  if (!html.includes(needle)) {
    console.error(`FAIL: ${name} missing (${needle})`);
    failed = true;
  } else {
    console.log(`PASS: ${name}`);
  }
}

const tagPairs = [
  ['html', /<html\b/g, /<\/html>/g],
  ['head', /<head\b/g, /<\/head>/g],
  ['body', /<body\b/g, /<\/body>/g],
  ['script', /<script\b/g, /<\/script>/g]
];
for (const [name, open, close] of tagPairs) {
  const opens = html.match(open)?.length ?? 0;
  const closes = html.match(close)?.length ?? 0;
  if (opens !== closes) {
    console.error(`FAIL: unbalanced ${name} tags (${opens}/${closes})`);
    failed = true;
  } else {
    console.log(`PASS: balanced ${name} tags`);
  }
}

if (failed) process.exit(1);
console.log('PBK V2 static smoke checks passed.');
