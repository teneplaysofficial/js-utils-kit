import { glob, readFile, writeFile } from 'node:fs/promises';
import { EOL } from 'node:os';
import { basename } from 'node:path';
import pkg from '../package.json' with { type: 'json' };

try {
  let safeExit = true;

  /**
   * @typedef {"-f"} CliFlags
   *
   *  @type {Set<CliFlags>}
   */
  const args = new Set(process.argv.slice(2));
  const corePath = 'packages/@js-utils-kit/core/package.json';

  // Verify core contains all internal packages

  /**
   * @type {string[]}
   */
  const pkgNames = await Array.fromAsync(
    glob('packages/@js-utils-kit/*', {
      exclude: ['packages/@js-utils-kit/core'],
    }),
  );
  const lib_names = pkgNames.map((p) => `@js-utils-kit/${basename(p)}`);
  const corePkg = JSON.parse(await readFile(corePath, 'utf-8'));
  const missing = lib_names.filter((l) => !Object.keys(corePkg.dependencies).includes(l));

  const engineIssues = [];

  for (const p of pkgNames) {
    const pkgPath = `${p}/package.json`;
    const pkgJson = JSON.parse(await readFile(pkgPath, 'utf-8'));
    if (JSON.stringify(pkgJson.engines) !== JSON.stringify(pkg.engines)) {
      engineIssues.push({ pkgPath, pkgJson });
    }
  }

  if (!args.has('-f')) {
    if (missing.length) {
      safeExit = false;
      console.warn('Missing packages in core:', missing.join(', '));
      console.info('Run with "-f" to automatically add missing packages');
    }

    if (engineIssues.length) {
      safeExit = false;
      console.warn(
        `Engine mismatch in ${engineIssues.map((d) => d.pkgPath.split(/[/\\]/)[1]).join(', ')}`,
      );
      console.info('Run with "-f" to automatically fix engines field in all packages');
    }
  }

  if (args.has('-f')) {
    await writeFile(
      corePath,
      JSON.stringify(
        {
          ...corePkg,
          dependencies: Object.fromEntries(
            Object.entries({
              ...corePkg.dependencies,
              ...Object.fromEntries(missing.map((n) => [n, 'workspace:*'])),
            }).sort(([a], [b]) => a.localeCompare(b)),
          ),
        },
        null,
        2,
      ) + EOL,
    );

    console.success('Core package.json updated successfully!');

    for (const { pkgPath, pkgJson } of engineIssues) {
      await writeFile(
        pkgPath,
        JSON.stringify(
          {
            ...pkgJson,
            engines: pkg.engines,
          },
          null,
          2,
        ) + EOL,
      );
      console.success(`Updated engines in ${pkgPath.split(/[/\\]/)[1]}`);
    }
  }

  process.exit(safeExit ? 0 : 1);
} catch (error) {
  console.error(error.message);
}
