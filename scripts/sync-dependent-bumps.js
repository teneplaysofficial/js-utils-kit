import fs from 'node:fs';
import path from 'node:path';
import parseChangesetFile from '@changesets/parse';
import { getPackages } from '@manypkg/get-packages';
import sylog from 'sylog';

const BUMP_PRIORITY = { patch: 0, minor: 1, major: 2 };
const cwd = process.cwd();
const changesetDir = path.join(cwd, '.changeset');

sylog.setLevels({
  info: 'sync-deps',
});

if (!fs.existsSync(changesetDir)) {
  sylog.info('no .changeset directory, exiting');
  process.exit(0);
}

sylog.info('starting');

const { packages } = await getPackages(cwd);

sylog.info('workspace packages:', packages.length);

const files = fs.readdirSync(changesetDir).filter((f) => f.endsWith('.md') && f !== 'README.md');

sylog.info('changeset files found:', files.length);

const explicitBumps = new Map();

for (const file of files) {
  const content = fs.readFileSync(path.join(changesetDir, file), 'utf-8');

  if (!content.startsWith('---')) continue;

  const { releases } = parseChangesetFile(content);

  for (const r of releases) {
    const prev = explicitBumps.get(r.name);
    if (!prev || BUMP_PRIORITY[r.type] > BUMP_PRIORITY[prev]) {
      explicitBumps.set(r.name, r.type);
    }
  }
}

sylog.info('explicit bumps:', explicitBumps.size);

const packageBumps = new Map(explicitBumps);

let changed = true;
let iterations = 0;
const MAX_ITERATIONS = packages.length + 5;

while (changed) {
  changed = false;
  iterations++;

  if (iterations > MAX_ITERATIONS) {
    console.warn('[sync-deps] max iterations reached, stopping propagation');
    break;
  }

  for (const pkg of packages) {
    const name = pkg.packageJson.name;
    if (!name) continue;

    const deps = {
      ...pkg.packageJson.dependencies,
      ...pkg.packageJson.peerDependencies,
    };

    let highest = null;

    for (const dep of Object.keys(deps || {})) {
      if (dep === name) continue;

      const bump = packageBumps.get(dep);
      if (bump && (!highest || BUMP_PRIORITY[bump] > BUMP_PRIORITY[highest])) {
        highest = bump;
      }
    }

    if (!highest) continue;

    const current = packageBumps.get(name);

    if (current !== highest) {
      if (!current || BUMP_PRIORITY[highest] > BUMP_PRIORITY[current]) {
        packageBumps.set(name, highest);
        changed = true;
      }
    }
  }
}

sylog.info('propagation iterations:', iterations);
sylog.info('final bump count:', packageBumps.size);

let didChange = false;
for (const [name, type] of packageBumps.entries()) {
  const explicit = explicitBumps.get(name);
  if (!explicit || BUMP_PRIORITY[type] > BUMP_PRIORITY[explicit]) {
    didChange = true;
    break;
  }
}

if (!didChange) {
  sylog.info('no derived bumps, nothing to write');
  process.exit(0);
}

const frontmatter =
  '---\n' +
  [...packageBumps.entries()].map(([name, type]) => `"${name}": ${type}`).join('\n') +
  '\n---\n';

const filePath = path.join(changesetDir, `sync-deps-${Date.now()}.md`);

fs.writeFileSync(filePath, frontmatter);

sylog.info('wrote synced changeset:', path.basename(filePath));
sylog.info('done');
