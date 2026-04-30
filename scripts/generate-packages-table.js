import { glob, readFile, writeFile } from 'node:fs/promises';
import { EOL } from 'node:os';
import { rewriteMdComment } from 'rewrite.md';
import { colors } from 'use-colors';
import zylog from 'zylog';

const README_PATH = 'README.md';

let packages = `
| Package | Version | Downloads | Description |
|--------|:--------:|:-----------:|------------|
`;

function parseGitignore(content) {
  return content
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'));
}

function normalize(p) {
  return p.replace(/\\/g, '/');
}

function isIgnored(path, rules) {
  const p = normalize(path);

  return rules.some((rule) => {
    const r = normalize(rule);

    if (r.endsWith('/')) {
      const dir = r.slice(0, -1);
      return p.split('/').includes(dir);
    }

    return p.endsWith(r) || p.split('/').includes(r);
  });
}

const rules = parseGitignore(await readFile('.gitignore', 'utf-8'));

const pkgDirs = (await Array.fromAsync(glob('packages/**/package.json')))
  .filter((p) => !isIgnored(p, rules))
  .map((p) => normalize(p).replace(/\/package\.json$/, ''));

packages += (
  await Promise.all(
    pkgDirs.map(async (dir) => {
      zylog.info(`Processing package ${colors.dim(dir)}`);

      const pkg = JSON.parse(await readFile(`${dir}/package.json`, 'utf-8'));

      const versionBadge = `[![npm version](https://img.shields.io/npm/v/${pkg.name}.svg?label=&style=flat)](https://www.npmjs.com/package/${pkg.name})`;
      const downloadBadge = `[![Downloads](https://img.shields.io/npm/dt/${pkg.name}?label=&style=flat&color=informational)](https://www.npmjs.com/package/${pkg.name})`;

      return `| [\`${pkg.name}\`](https://www.npmjs.com/package/${pkg.name}) | ${versionBadge} | ${downloadBadge} | ${pkg.description} |`;
    }),
  )
)
  .sort((a, b) => a.localeCompare(b))
  .join(EOL);

await writeFile(
  README_PATH,
  rewriteMdComment(await readFile(README_PATH, 'utf-8'), {
    packages,
  }),
);
