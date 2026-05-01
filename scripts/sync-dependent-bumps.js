import fs from 'node:fs';
import path from 'node:path';
import parseChangesetFile from '@changesets/parse';
import { getPackages } from '@manypkg/get-packages';
import matter from 'gray-matter';
import zylog from 'zylog';

const BUMP_PRIORITY = { patch: 0, minor: 1, major: 2 };
const cwd = process.cwd();
const changesetDir = path.join(cwd, '.changeset');

zylog.config = {
  prefix: 'sync-deps',
};

if (!fs.existsSync(changesetDir)) {
  zylog.info('no .changeset directory, exiting');
  process.exit(0);
}

zylog.info('scanning .changeset directory for changeset files');

const { packages } = await getPackages(cwd);

const files = fs.readdirSync(changesetDir).filter((f) => f.endsWith('.md') && f !== 'README.md');

zylog.info('changeset files found:', files.length);

let updatedFiles = 0;

for (const file of files) {
  const filePath = path.join(changesetDir, file);
  const raw = fs.readFileSync(filePath, 'utf-8');

  if (!raw.startsWith('---')) continue;

  const parsedChangeset = parseChangesetFile(raw);
  const localBumps = new Map(parsedChangeset.releases.map((r) => [r.name, r.type]));
  const packageBumps = new Map(localBumps);
  const MAX_ITERATIONS = packages.length + 5;
  let changed = true;
  let iterations = 0;

  while (changed) {
    changed = false;
    iterations++;

    if (iterations > MAX_ITERATIONS) break;

    for (const pkg of packages) {
      const name = pkg.packageJson.name;
      if (!name || (name !== 'js-utils-kit' && name !== '@js-utils-kit/core')) continue;

      const deps = {
        ...pkg.packageJson.dependencies,
        ...pkg.packageJson.peerDependencies,
      };

      let highest = null;

      for (const dep of Object.keys(deps || {})) {
        if (!dep.startsWith('@js-utils-kit/')) continue;

        const bump = packageBumps.get(dep);

        if (bump && (!highest || BUMP_PRIORITY[bump] > BUMP_PRIORITY[highest])) {
          highest = bump;
        }
      }

      if (!highest) continue;

      const current = packageBumps.get(name);

      if (!current || BUMP_PRIORITY[highest] > BUMP_PRIORITY[current]) {
        packageBumps.set(name, highest);
        changed = true;
      }
    }
  }

  const parsed = matter(raw);
  const data = parsed.data;
  const content = parsed.content;

  let updated = false;

  for (const [pkgName, bumpType] of packageBumps.entries()) {
    if (pkgName !== 'js-utils-kit' && pkgName !== '@js-utils-kit/core') continue;

    const existing = data[pkgName];

    if (!existing || BUMP_PRIORITY[bumpType] > BUMP_PRIORITY[existing]) {
      data[pkgName] = bumpType;
      updated = true;
    }
  }

  if (!updated) continue;

  const newFile = matter.stringify(content, data);

  fs.writeFileSync(filePath, newFile);

  zylog.info('updated changeset:', file);
  updatedFiles++;
}

if (updatedFiles === 0) {
  zylog.success('No files needed updating');
} else {
  zylog.success('Updated files:', updatedFiles);
}
